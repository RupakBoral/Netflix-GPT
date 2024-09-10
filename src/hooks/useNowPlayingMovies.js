import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { addNowPlaying } from '../redux/MovieSlice';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const NowPlaying = useSelector((store) => store?.movies?.NowPlaying)

    const getNowPlayingMovies = async () =>{ 
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1&region=IN', API_OPTIONS)
        const result = await response.json()
        const data = result.results
        if(data) dispatch(addNowPlaying(data))
        // console.log(data);
    }
    
    useEffect(() => {
        !NowPlaying && getNowPlayingMovies()
    }, []);
}

export default useNowPlayingMovies