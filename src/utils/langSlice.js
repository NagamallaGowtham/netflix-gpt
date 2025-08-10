import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "lang",
    initialState: {
        langSelected: "en"
    },
    reducers: {
        selectLanguage: (state, action) => {
            state.langSelected = action.payload
        }
    }
})

export const { selectLanguage } = langSlice.actions

export default langSlice.reducer