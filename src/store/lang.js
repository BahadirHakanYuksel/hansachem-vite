import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active_lng: undefined,
};

const lang = createSlice({
  name: "lang",
  initialState,
  reducers: {
    update_lng: (state, action) => {
      state.active_lng = action.payload;
    },
  },
});

export const { update_lng } = lang.actions;
export default lang.reducer;
