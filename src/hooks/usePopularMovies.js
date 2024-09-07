import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopular } from "../redux/MovieSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch()

    const getTrendingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const result = await response.json();
        const data = await result.results
        if(data) dispatch(addPopular(data))
    }
    
    useEffect(()=>{
        getTrendingMovies()
    }, [])
}

export default usePopularMovies;