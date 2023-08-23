import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genre: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getApiConfig: (state, action) => {
      state.url = action.payload;
    },
    getGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfig, getGenre } = homeSlice.actions;

export default homeSlice.reducer;
