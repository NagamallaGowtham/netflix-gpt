import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptNames: null,
        gptResults: null,
    },
    reducers: {
        toggleGptSearch: (state, action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptNames: (state, action) => {
            state.gptNames = action.payload
        },
        addGPtResults: (state, action) => {
            state.gptResults = action.payload
        }
    }
})

export const { toggleGptSearch, addGptNames, addGPtResults } = gptSlice.actions

export default gptSlice.reducer