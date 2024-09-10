import React from 'react';
import { useSelector } from 'react-redux';
import NoGptMoviesList from '../Movies/NoGptMovieList';

const NoGptSearchResult = () => {
    const allRes = useSelector((store) => store?.SearchResult?.all)
    // const showsRes = useSelector((store) => store?.SearchResult?.shows)
    // console.log(allRes);
    return (
        <div className={`text-white bg-black ${allRes} ? -my-32: -my-28 transition-all duration-1000`}>
            {
                (allRes) ? <NoGptMoviesList allRes={allRes}/> : ''
            }
        </div>
    );
}

export default NoGptSearchResult;
