import React from 'react';

const VideoTitle = ({title, overview, vote_average}) => {
    return (
        <div className='z-20 text-white space-y-6 absolute text-opacity-85 top-[25%] pl-16 overflow-x-hidden'>
            <section className='w-1/3 space-y-4 p-8 rounded-xl'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <h3 className='text-xl font-medium'>{overview}</h3>
                <p className='text-xl font-bold text-yellow-500 text-opacity-95'>Rating: {vote_average}</p>
            </section>
            <div className='flex gap-8 w-1/3'>
                <button className='py-5 w-1/2 text-opacity-85 bg-opacity-85 rounded-md bg-gray-100 font-bold text-2xl text-red-600 hover:text-gray-100 hover:bg-red-600 transition-all duration-1000'>Play</button>
                <button className='py-5 w-1/2 text-opacity-85 bg-opacity-85 rounded-md bg-gray-100 font-bold text-2xl text-red-600 hover:text-gray-100 hover:bg-red-600 transition-all duration-1000'>More Info</button>
            </div>
        </div>
    );
}

export default VideoTitle;
