import React from 'react';
import SearchBar from '../GPTSearch/SearchBar';
import { useSelector } from 'react-redux';
import GPTSearchResult from '../GPTSearch/GPTSearchResult';

const GPTSearch = () => {
    const movies = useSelector((store) => store?.SearchResult?.movies)
    const shows = useSelector((store) => store?.SearchResult?.shows)

    return (
        <div className='text-white w-screen relative h-screen bg-black'>
            <SearchBar />
            {
                (movies || shows) ? <GPTSearchResult /> : ''
            }
        </div>
    );
}

export default GPTSearch;
