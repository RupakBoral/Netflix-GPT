import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addTrailer } from '../redux/MovieSlice';

const useMovieTrailer = (id) => {

    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS)
        const result = await response.json()
        const data = result.results
        const trailers = data.filter((video) => video.type === "Trailer")
        const trailer = trailers.length === 0 ? data[0] : trailers[0];
        
        dispatch(addTrailer(trailer))
        // console.log(Trailer);
    }
    
    useEffect(() => {
        getMovieVideo()
    }, []);
}

export default useMovieTrailer;