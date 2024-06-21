import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  modeIcon: "fa-solid fa-moon",
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    lightMode: (state) => {
      state.mode = "light";
      state.modeIcon = "fa-solid fa-moon";
      document.querySelector("html").classList.remove("dark");
    },
    darkMode: (state) => {
      state.mode = "dark";
      state.modeIcon = "fa-solid fa-sun";
      document.querySelector("html").classList.add(state.mode);
    },
  },
});

export default theme.reducer;
export const { lightMode, darkMode } = theme.actions;
