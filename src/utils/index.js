import store from "../store";
import { update_lng } from "../store/lang";
import { leftSlide, rightSlide } from "../store/slider";

export const update_lng_handle = (lng) => {
  store.dispatch(update_lng(lng));
};

export const rightSlideHandle = () => {
  store.dispatch(rightSlide());
};

export const leftSlideHandle = () => {
  store.dispatch(leftSlide());
};
