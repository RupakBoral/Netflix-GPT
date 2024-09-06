import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
  name: 'userInfo',
  initialState: {
    user: '',
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = ''; 
    },
  },
})

export const { addUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;