import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userInfo: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
      userInfo = null;
    },
    setuserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setToken, clearToken, setuserInfo } =
  tokenSlice.actions;

export default tokenSlice.reducer;
