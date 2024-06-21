import { configureStore } from "@reduxjs/toolkit";
import lang from "./lang";
import slider from "./slider";
import products_store from "./products_store";
import modal from "./modal";
import theme from "./theme";

const store = configureStore({
  reducer: { lang, slider, products_store, modal, theme },
});

export default store;
