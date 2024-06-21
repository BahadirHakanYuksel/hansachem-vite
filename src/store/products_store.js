import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path_categoryID: false,
  path_subCategoryID: false,
};

const products_store = createSlice({
  name: "product_store",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.path_categoryID = action.payload.categoryID;
      state.path_subCategoryID = action.payload.subCategoryID;
    },
  },
});

export default products_store.reducer;
export const { searchProduct } = products_store.actions;
