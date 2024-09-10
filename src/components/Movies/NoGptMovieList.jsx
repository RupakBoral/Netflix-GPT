import React from 'react';
import MovieCard from './MovieCard';
import Shimmer from  '../Shimmer'


const NoGptMovieList = ({allRes}) => {

    // const { poster_path, backdrop_path } = movies
    // console.log(movies);
    return (allRes === null) ? <Shimmer /> : (
        <div className={`w-5/6 flex flex-wrap sm:gap-4 gap-2 md:gap-6 mx-auto ${allRes} ? my-24: my-32 transition-all duration-1000`} >
        {
            allRes.map((item, index) => <MovieCard key={index} poster_path={item.poster_path}/>)
        }
        </div>
    );
}

export default NoGptMovieList;
