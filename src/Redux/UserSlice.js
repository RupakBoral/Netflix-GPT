import { createSlice } from '@reduxjs/toolkit'

// Create the user slice
const UserSlice = createSlice({
  name: 'userInfo',
  initialState: {
    email: '',
  },
  reducers: {
    signIn: (state, action) => {
      state.email = action.payload;
    },
    signOut: (state) => {
      state.email = ''; 
    },
  },
})
export const { signIn, signOut } = UserSlice.actions;

export default UserSlice.reducer;