import React, { useRef, useState } from 'react';
import lang from '../../utils/langConstants';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, Groq_KEY } from '../../utils/constants';
import Error from '../Error';
import { addMovies, addShows } from '../../redux/SearchResultSlice';

const SearchBar = () => {
  
  const search = useRef(null);
  const [BarPosition, setBarPosition] = useState(false)
  const currentLang = useSelector((store) => store?.Language?.lang)
  
  const dispatch = useDispatch();
  const Groq = require('groq-sdk');

  const SearchResultTmdb = async (movie) => {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&page=1', API_OPTIONS)
    const result = await response?.json()
    const data = await result?.results
    // console.log(data);
    return data
  }

  const handleSearch = async () => {
    if(BarPosition === false) setBarPosition(true)
    const systemPrompt = "You are a Movie Recommendation System. Respond only in JSON. Provide an object with two keys: 'Movies' (array of atmost 5 movie names) and 'Shows' (array of at most 5 and show names)."
    const userPrompt = await search?.current?._valueTracker?.getValue();

    const groq = new Groq({apiKey: Groq_KEY,  dangerouslyAllowBrowser: true});

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      model: "llama3-8b-8192",
      temperature: 0.5,
      max_tokens: 150,
      top_p: 1,
      stream: false,
      response_format: {
        type: "json_object"
      }
    });

    const response = Object.assign(
      JSON.parse(chatCompletion.choices[0].message.content),
    );
    // console.log(response);
    
    if(response){
      const PromiseArray = response.Movies.map((movie) => SearchResultTmdb(movie))
      const tmdbRes = await Promise.all(PromiseArray)
      console.log(tmdbRes);

      dispatch(addMovies(tmdbRes))
      // dispatch(addShows(response.Shows))
    }
    else <Error />


  }

    return (
        <div className={`w-1/2 mx-auto ${BarPosition ? 'py-[10%]' : 'py-[18%]'} transition-all duration-1000`}>
            <form
                onSubmit={(e) => e.preventDefault()} 
                className='flex'>
                <input
                    ref={search}
                    type='text'
                    className='p-5 bg-gray-200 text-2xl flex-[3] rounded-md rounded-r-none text-black font-semibold'
                    placeholder={lang[currentLang].BarPlaceholder}
                />
                <button
                    onClick={handleSearch} 
                    className='bg-red-600 p-5 text-2xl font-semibold rounded-md flex-1 rounded-l-none'>{lang[currentLang].Search}</button>
            </form>
        </div>
    );
}

export default SearchBar;
