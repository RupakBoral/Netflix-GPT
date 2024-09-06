import React from 'react';
import MoviesList from '../Movies/MoviesList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

    const NowPlayingMovies = useSelector((store) => store?.movies?.NowPlaying);

    return (
        <div className='text-white relative bg-black '>
            <div className='-mt-36 relative z-50 p-6'>
                <MoviesList title = {"Now Playing"} movies = {NowPlayingMovies}/>
                <MoviesList title = {"Trending"} movies = {NowPlayingMovies}/>
                <MoviesList title = {"Popular"} movies = {NowPlayingMovies}/>
                <MoviesList title = {"Upcomming"} movies = {NowPlayingMovies}/>
            </div>
        </div>
    );
}

export default SecondaryContainer;
