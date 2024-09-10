import { createSlice } from "@reduxjs/toolkit";

const GPTsearch = createSlice({
    name: 'GPTmode',
    initialState: {
        GPTmode: false,
    },
    reducers: {
        ToggleGPTmode: (state, action) => {
            state.GPTmode = action.payload
        }
    }
})

export const {ToggleGPTmode} = GPTsearch.actions

export default GPTsearch.reducer