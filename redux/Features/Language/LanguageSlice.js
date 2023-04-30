import { createSlice } from "@reduxjs/toolkit";
const initialState = {
        lang: "eng"
}
export const languageSlice = createSlice ({
    name: "language",
    initialState,
    reducers: {
        SET_LANG:(state, action) => {
            state.lang = action.payload
        }
    } 
}) 

export const {SET_LANG} = languageSlice.actions

export default languageSlice.reducer