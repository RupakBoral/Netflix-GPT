import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: 'movies',
    initialState: {
        NowPlaying: null,
        Trailer: null,
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.NowPlaying = action.payload;
        },
        addTrailer: (state, action) => {
            state.Trailer = action.payload;
        }
    },
})

export const { addNowPlaying, addTrailer } = MovieSlice.actions

export default MovieSlice.reducer