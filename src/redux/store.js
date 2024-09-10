import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserSlice'; 
import MoviesReducer from './MovieSlice'
import GPTSearchReducer from './gptSlice'
import LanguageReducer from './LanguageSlice'
import SearchResultReducer from './SearchResultSlice';
import GPTmodeReducer from './GPTsearch'

// Configure the store
const store = configureStore({
  reducer: {
    userInfo: UserReducer,
    movies: MoviesReducer,
    GPTSearch: GPTSearchReducer,
    Language: LanguageReducer,
    SearchResult: SearchResultReducer,
    GPTmode: GPTmodeReducer,
  },
})

export default store;