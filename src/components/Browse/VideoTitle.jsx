import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../../utils/langConstants';
import { hover } from '@testing-library/user-event/dist/hover';
import { useState } from 'react';

const VideoTitle = ({title, overview, vote_average}) => {

    const currentLang = useSelector((store) => store?.Language?.lang)
    const [isHoveredPlay, setisHoveredPlay] = useState(false);
    const [isHoveredInfo, setisHoveredInfo] = useState(false);

    return (
        <div className='z-40 text-white space-y-6 absolute text-opacity-85 top-[25%] pl-16 overflow-x-hidden'>
            <section className='w-1/3 space-y-4 p-8 rounded-xl'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <h3 className='text-xl font-medium'>{overview}</h3>
                <p className='text-xl font-bold text-yellow-500 text-opacity-95'>Rating: {vote_average.toFixed(1)}</p>
            </section>
            <div className='flex gap-8 w-1/3'>
                <button 
                    onMouseEnter={() => setisHoveredPlay(true)}
                    onMouseLeave={() => setisHoveredPlay(false)}
                    className='flex gap-2 items-center justify-center py-5 w-1/2 text-opacity-85 bg-opacity-85 rounded-md bg-gray-100 font-bold text-2xl text-red-600 hover:text-gray-100 hover:bg-red-600 transition-all duration-1000'>
                    <svg xmlns="http://www.w3.org/2000/svg"   
                        className='transition-all duration-1000' height="24px" viewBox="0 -960 960 960" width="24px" fill={isHoveredPlay ? "white" : "#EA3323"} ><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>  
                    {lang[currentLang].Play}
                </button>
                <button 
                    onMouseEnter={() => setisHoveredInfo(true)}
                    onMouseLeave={() => setisHoveredInfo(false)}
                    className='flex gap-2 items-center justify-center py-5 w-1/2 text-opacity-85 bg-opacity-85 rounded-md bg-gray-100 font-bold text-2xl text-red-600 hover:text-gray-100 hover:bg-red-600 transition-all duration-1000'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='transition-all duration-1000' height="24px" viewBox="0 -960 960 960" width="24px" fill={isHoveredInfo ? "white" : "#EA3323"}><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                    {lang[currentLang].MoreInfo}
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;
