import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'; // Adjust import name for clarity

// Configure the store
const store = configureStore({
  reducer: {
    userInfo: UserSlice,
  },
})

export default store;