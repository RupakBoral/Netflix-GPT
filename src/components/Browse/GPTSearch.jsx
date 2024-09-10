import React from 'react';
import SearchBar from '../GPTSearch/SearchBar';
import { useSelector } from 'react-redux';
import GPTSearchResult from '../GPTSearch/GPTSearchResult';
import NoGptSearchResult from '../GPTSearch/NoGptSearchResult';

const GPTSearch = () => {
    const movies = useSelector((store) => store?.SearchResult?.movies)
    const shows = useSelector((store) => store?.SearchResult?.shows)
    const GPTmode = useSelector((store) => store?.GPTmode?.GPTmode)
    
    return (
        <div className='text-white w-screen relative h-screen bg-black'>
            <SearchBar />
            {
                ((movies || shows) && GPTmode) ? <GPTSearchResult /> : <NoGptSearchResult/>
            }
        </div>
    );
}

export default GPTSearch;
