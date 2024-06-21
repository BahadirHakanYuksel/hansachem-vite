import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeScreenIndex: 0,
};

const slider = createSlice({
  name: "slider",
  initialState,
  reducers: {
    rightSlide: (state) => {
      state.activeScreenIndex < 2
        ? state.activeScreenIndex++
        : (state.activeScreenIndex = 0);
    },
    leftSlide: (state) => {
      state.activeScreenIndex > 0
        ? state.activeScreenIndex--
        : (state.activeScreenIndex = 2);
    },
    updateSlide: (state, action) => {
      state.activeScreenIndex = action.payload;
    },
  },
});

export default slider.reducer;
export const { rightSlide, leftSlide, updateSlide } = slider.actions;
