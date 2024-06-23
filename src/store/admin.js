import { createSlice } from "@reduxjs/toolkit";
import { defaultAbout } from "../consts";

const initialState = {
  myProducts: [],
  myAbout: defaultAbout,
  contactInfos: [
    {
      id: 0,
      link: "",
      text: "00000000000",
    },
    {
      id: 1,
      link: "",
      text: "ornek123@gmail.com",
    },
  ],
};

const admin = createSlice({
  name: "admin",
  initialState,
  reducers: {},
});

export default admin.reducer;
export const {} = admin.actions;
