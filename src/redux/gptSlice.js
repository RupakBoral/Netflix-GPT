import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: 'GPT',
    initialState: {
        GPTSeachView: false,
    },
    reducers: {
        ToggleGPTSearchView: (state) => {
            state.GPTSeachView = !state.GPTSeachView
        }
    }
})

export const { ToggleGPTSearchView } = GPTSlice.actions

export default GPTSlice.reducer