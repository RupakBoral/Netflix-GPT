import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {

    const movie = useSelector((state) => state?.movies?.NowPlaying);
    
    // re return if movies is null in Movies Slice of Redux Store
    if(movie === null) return;

    const MainMovie = movie[0];
    // console.log(MainMovie);
    const {id, title, original_title, overview, poster_path, vote_average, backdrop_path} = MainMovie;

    return (
        <div className='text-white box-border relative'>
            <VideoBackground id={id}/>
            <VideoTitle title={title} overview={overview} vote_average={vote_average}/>
        </div>
    );
}

export default MainContainer;
