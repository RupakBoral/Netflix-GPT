import React from 'react';
import MovieCard from './MovieCard';
import Shimmer from  '../Shimmer'

const MoviesList = ({title, movies}) => {

    // const { poster_path, backdrop_path } = movies
    // console.log(movies);
    return (movies===null) ? <Shimmer /> : (
        <div className='space-y-8 p-6'>
            <h1 className='text-2xl font-bold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex gap-6'>
                {
                    movies.map((item, index) => <MovieCard key={index} poster_path={item.poster_path}/>)
                }
                </div>
            </div>
        </div>
        );
}

export default MoviesList;
