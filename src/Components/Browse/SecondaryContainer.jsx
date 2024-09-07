import React from 'react';
import MoviesList from '../Movies/MoviesList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

    const NowPlayingMovies = useSelector((store) => store?.movies?.NowPlaying);
    const Popular = useSelector((store) => store?.movies?.Popular)
    const TopRated = useSelector((store) => store?.movies?.TopRated)
    const Upcoming = useSelector((store) => store?.movies?.Upcoming)

    return (
        <div className='text-white relative bg-black '>
            <div className='-mt-56 relative z-50 p-10'>
                <MoviesList title = {"Now Playing"} movies = {NowPlayingMovies}/>
                <MoviesList title = {"Popular"} movies = {Popular}/>
                <MoviesList title = {"Top Rated"} movies = {TopRated}/>
                <MoviesList title = {"Upcoming"} movies = {Upcoming}/>
            </div>
        </div>
    );
}

export default SecondaryContainer;
