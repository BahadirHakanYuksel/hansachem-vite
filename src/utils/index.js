import store from "../store";
import { update_lng } from "../store/lang";
import { closeNavProductsMenu, openNavProductsMenu } from "../store/modal";
import { searchProduct } from "../store/products_store";
import { leftSlide, rightSlide, updateSlide } from "../store/slider";
import { darkMode, lightMode } from "../store/theme";

export const update_lng_handle = (lng) => {
  store.dispatch(update_lng(lng));
};

export const rightSlideHandle = () => {
  store.dispatch(rightSlide());
};

export const updateSlideHandle = (index) => {
  store.dispatch(updateSlide(index));
};

export const leftSlideHandle = () => {
  store.dispatch(leftSlide());
};

export const searchProductHandle = (search_infos) => {
  store.dispatch(searchProduct(search_infos));
};

export const openNavProductsMenuHandle = () => {
  store.dispatch(openNavProductsMenu());
};
export const closeNavProductsMenuHandle = () => {
  store.dispatch(closeNavProductsMenu());
};

export const lightModeHandle = () => {
  store.dispatch(lightMode());
};

export const darkModeHandle = () => {
  store.dispatch(darkMode());
};
