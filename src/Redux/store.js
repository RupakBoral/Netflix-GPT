import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserSlice'; 
import MoviesReducer from './MovieSlice'

// Configure the store
const store = configureStore({
  reducer: {
    userInfo: UserReducer,
    movies: MoviesReducer,
  },
})

export default store;