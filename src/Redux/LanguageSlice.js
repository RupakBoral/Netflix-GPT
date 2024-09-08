import { createSlice } from "@reduxjs/toolkit";
import lang from "../utils/langConstants";

const LanguageSlice = createSlice({
    name: 'lang',
    initialState: {
        lang: 'en'
    },
    reducers: {
        ToggleLang: (state, action) => {
            state.lang = action.payload
        }
    }
})

export const {ToggleLang} = LanguageSlice.actions

export default LanguageSlice.reducer