import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieRes: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResult: (state, action) => {
      state.movieNames = action.payload.movieNames;
      state.movieRes = action.payload.movieRes;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
