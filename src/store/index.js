import { configureStore } from "@reduxjs/toolkit";
import lang from "./lang";
import slider from "./slider";

const store = configureStore({
  reducer: { lang, slider },
});

export default store;
