import { createSlice } from "@reduxjs/toolkit";

const SearchResultSlice = createSlice({
    name: 'results',
    initialState: {
        movies: [],
        shows: [],
    },
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload
        },
        addShows: (state, action) => {
            state.shows = action.payload
        }
    }
})

export const {addMovies, addShows} = SearchResultSlice.actions

export default SearchResultSlice.reducer