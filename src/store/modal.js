import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navProductsMenuIsOpened: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openNavProductsMenu: (state) => {
      state.navProductsMenuIsOpened = true;
    },
    closeNavProductsMenu: (state) => {
      state.navProductsMenuIsOpened = false;
    },
  },
});

export default modal.reducer;
export const { openNavProductsMenu, closeNavProductsMenu } = modal.actions;
