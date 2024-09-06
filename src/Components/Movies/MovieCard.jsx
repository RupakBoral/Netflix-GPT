import React from 'react';
import {POSTER_URL} from '../../utils/constants'

const MovieCard = ({ poster_path }) => {
    return (
        <div className="min-w-[150px] h-[200px] cursor-pointer">
            <img 
                src={POSTER_URL+poster_path} 
                alt="Poster" 
                className="w-full h-full object-cover rounded-lg shadow-md"
            />
        </div>
    );
}


export default MovieCard;