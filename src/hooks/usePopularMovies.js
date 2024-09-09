import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../redux/MovieSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch()
    const Popular = useSelector((store) => store?.movies?.Popular)

    const getTrendingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const result = await response.json();
        const data = await result.results
        if(data) dispatch(addPopular(data))
    }
    
    useEffect(()=>{
        !Popular && getTrendingMovies()
    }, [])
}

export default usePopularMovies;