import { configureStore } from "@reduxjs/toolkit";
import lang from "./lang";
import slider from "./slider";
import products_store from "./products_store";

const store = configureStore({
  reducer: { lang, slider, products_store },
});

export default store;
