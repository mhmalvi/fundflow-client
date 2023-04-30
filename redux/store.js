'use client'
import { configureStore } from "@reduxjs/toolkit"
import languageReducer from "./Features/Language/LanguageSlice"
import { loadState, saveState } from "./utils/localStorage"

const initialState = loadState();

export const store = configureStore ({
        reducer:{
            language: languageReducer
        },
        preloadedState: initialState,
})

store.subscribe(() => {
    saveState(store.getState());
  });