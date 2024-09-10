import React, { Suspense } from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './Browse/MainContainer';
import SecondaryContainer from './Browse/SecondaryContainer';
import UpdateHeader from './Browse/UpdateHeader';
import Shimmer from './Shimmer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './Browse/GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()

    const SearchView = useSelector((store) => store?.GPTSearch?.GPTSeachView)

    return (
        <div className='w-screen h-screen bg-black relative'>
            <UpdateHeader />
            {
                // if search view is on then show gpt search or else show main and sec container
                (SearchView === true) ? <GPTSearch /> : 
                    <Suspense fallback = {<Shimmer />}>
                        <MainContainer />
                        <SecondaryContainer />
                    </Suspense>
            }
        </div>
    );
}

export default Browse;
