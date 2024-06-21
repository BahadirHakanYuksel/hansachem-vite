import store from "../store";
import { update_lng } from "../store/lang";
import { searchProduct } from "../store/products_store";
import { leftSlide, rightSlide, updateSlide } from "../store/slider";

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
