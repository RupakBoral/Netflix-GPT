import React from 'react';
import {POSTER_URL} from '../../utils/constants'

const MovieCard = ({ poster_path }) => {
    if(poster_path === null) return
    return (
        <div className="md:min-w-[150px] md:h-[200px] sm:min-w-[100px] sm:min-h-[120px] min-w-[80px] min-h-[100px] cursor-pointer">
            <img 
                src={POSTER_URL+poster_path} 
                alt="" 
                className=" transition-all hover:-translate-y-2 duration-600 hover:rounded-lg w-full h-full object-cover rounded-lg shadow-md"
            />
        </div>
    );
}


export default MovieCard;
