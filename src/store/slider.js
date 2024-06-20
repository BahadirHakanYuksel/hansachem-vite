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
  },
});

export default slider.reducer;
export const { rightSlide, leftSlide } = slider.actions;
