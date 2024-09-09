import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addUpcoming } from "../redux/MovieSlice"
import { useEffect } from "react"

const useUpcomingMovies = () => {

    const dispatch = useDispatch()
    const Upcoming = useSelector((store) => store?.movies?.Upcoming)

    const getUpcoming = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const result = await response.json()
        const data = await result?.results
        if(data) dispatch(addUpcoming(data))
    }

    useEffect(() => {
        !Upcoming && getUpcoming()
    }, [])
}

export default useUpcomingMovies