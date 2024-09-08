import React, { useRef, useState } from 'react';
import lang from '../../utils/langConstants';
import { useSelector } from 'react-redux';
import {apiKey} from '../../utils/OpenAi'
import {baseURL} from '../../utils/OpenAi'

const SearchBar = () => {
    
    const [BarPosition, setBarPosition] = useState(false)
    const currentLang = useSelector((store) => store?.Language?.lang)
    const search = useRef(null);

    const handleSearch = async () => {
        setBarPosition(!BarPosition)
        const prompt = await search?.current?._valueTracker?.getValue()
        const { OpenAI } = require("openai");
        const api = new OpenAI({
            apiKey,
            baseURL,
            dangerouslyAllowBrowser: true ,
          });
        const systemPrompt = 'You are a movie and shows recommendation system. Just list the names, nothing else.'
        const completion = await api.chat.completions.create({
            model: "mistralai/Mistral-7B-Instruct-v0.2",
            messages: [
              {
                role: "system",
                content: systemPrompt,
              },
              {
                role: "user",
                content: prompt,
              },
            ],
            temperature: 0.7,
            max_tokens: 256,
          });
        
          const response = completion.choices[0].message.content;

          console.log(response);
          
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
