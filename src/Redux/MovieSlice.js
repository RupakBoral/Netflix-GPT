import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: 'movies',
    initialState: {
        Trailer: null,
        NowPlaying: null,
        Popular: null,
        TopRated: null,
        Upcoming: null
    },
    reducers: {
        addTrailer: (state, action) => {
            state.Trailer = action.payload;
        },
        addNowPlaying: (state, action) => {
            state.NowPlaying = action.payload;
        },
        addPopular: (state, action) => {
            state.Popular = action.payload;
        },
        addTopRated: (state, action) => {
            state.TopRated = action.payload;
        },
        addUpcoming: (state, action) => {
            state.Upcoming = action.payload;
        },
    },
})

export const { addNowPlaying, addTrailer, addTopRated, addPopular, addUpcoming } = MovieSlice.actions

export default MovieSlice.reducer