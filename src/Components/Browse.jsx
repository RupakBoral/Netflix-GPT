import React, { Suspense } from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './Browse/MainContainer';
import SecondaryContainer from './Browse/SecondaryContainer';
import UpdateHeader from './Browse/UpdateHeader';
import Shimmer from './Shimmer';

const Browse = () => {

    useNowPlayingMovies()

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
