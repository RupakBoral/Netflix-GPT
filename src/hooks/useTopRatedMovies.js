import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../redux/MovieSlice";


const useTopRatedMovies = () => {

    const dispatch = useDispatch()
    const TopRated = useSelector((store) => store?.movies?.TopRated)

    const getTopRated = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const result = await response.json();
        const data = await result?.results;
        if(data) dispatch(addTopRated(data))
    }

    useEffect(() => {
        !TopRated && getTopRated()
    }, [])
}   

export default useTopRatedMovies