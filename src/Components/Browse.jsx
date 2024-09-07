import React, { Suspense } from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './Browse/MainContainer';
import SecondaryContainer from './Browse/SecondaryContainer';
import UpdateHeader from './Browse/UpdateHeader';
import Shimmer from './Shimmer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()

    return (
        <div className='w-screen h-screen bg-black'>
            <UpdateHeader />
            <Suspense fallback = {<Shimmer />}>
                <MainContainer />
                <SecondaryContainer />
            </Suspense>
        </div>
    );
}

export default Browse;
