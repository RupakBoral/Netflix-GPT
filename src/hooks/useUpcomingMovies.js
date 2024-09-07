import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addUpcoming } from "../redux/MovieSlice"
import { useEffect } from "react"

const useUpcomingMovies = () => {

    const dispatch = useDispatch()

    const getUpcoming = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const result = await response.json()
        const data = await result?.results
        if(data) dispatch(addUpcoming(data))
    }

    useEffect(() => {
        getUpcoming()
    }, [])
}

export default useUpcomingMovies