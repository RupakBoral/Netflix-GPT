import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';
import Shimmer from '../Shimmer';

const MainContainer = () => {

    const movie = useSelector((state) => state?.movies?.NowPlaying);
    
    // re return if movies is null in Movies Slice of Redux Store
    if(movie === null) return;

    const MainMovie = movie[1];
    // console.log(MainMovie);
    const {id, title, overview, vote_average} = MainMovie;

    return (
        <div className='text-white box-border relative'>
            <div className='w-screen h-full z-30 absolute'>
                <div className='bg-gradient-to-r from-black w-2/5 h-full'></div>
            </div>
            <VideoBackground id={id}/>
            <VideoTitle title={title} overview={overview} vote_average={vote_average}/>
        </div>
    );
}

export default MainContainer;
