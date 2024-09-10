import { createSlice } from "@reduxjs/toolkit";

const SearchResultSlice = createSlice({
    name: 'results',
    initialState: {
        movies: [],
        shows: [],
        all: []
    },
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload
        },
        addShows: (state, action) => {
            state.shows = action.payload
        },
        addAll: (state, action) => {
            state.all = action.payload
        }
    }
})

export const {addMovies, addShows, addAll} = SearchResultSlice.actions

export default SearchResultSlice.reducer