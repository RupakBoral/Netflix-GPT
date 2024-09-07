import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addTopRated } from "../redux/MovieSlice";


const useTopRatedMovies = () => {

    const dispatch = useDispatch()

    const getTopRated = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const result = await response.json();
        const data = await result?.results;
        if(data) dispatch(addTopRated(data))
    }

    useEffect(() => {
        getTopRated()
    }, [])
}   

export default useTopRatedMovies