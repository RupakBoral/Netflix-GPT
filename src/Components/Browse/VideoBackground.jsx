import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../../hooks/useMovieTrailer';

const VideoBackground = ({id}) => {

    useMovieTrailer(id)

    const trailer = useSelector((store) => store?.movies?.Trailer)
    const trailerId = trailer?.key

    return (
        <div className='w-screen relative'>
            <div className='absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-black z-20'></div>
            
            {/* YouTube iframe content */}
            <div className='text-white w-screen relative z-10'>
                <iframe 
                    className='w-full aspect-video border border-black border-collapse'
                    src={`https://www.youtube.com/embed/${trailerId}?controls=0&rel=0&showinfo=0&autoplay=1&mute=1&loop=1`} 
                    title="YouTube Video" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="encrypted-media; fullscreen"
                    allowFullScreen={true}
                    disablePictureInPicture>
                </iframe>
            </div>
        </div>
    );
    
}

export default VideoBackground;
