import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from '../Movies/MoviesList'

const GPTSearchResult = () => {

    const moviesRes = useSelector((store) => store?.SearchResult?.movies)
    // const showsRes = useSelector((store) => store?.SearchResult?.shows)

    return (
        <div className={`text-white bg-black ${moviesRes} ? -my-32: -my-28 transition-all duration-1000`}>
            {
                moviesRes.map((movies) => <MoviesList title={movies[0].title} movies={movies}/>)
            }
        </div>
    );
}

export default GPTSearchResult;
