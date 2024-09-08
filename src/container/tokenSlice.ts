import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface AuthState {
  token: string | null;
  userInfo: any | null; 
}

const initialState:AuthState ={
  token: null,
    userInfo: null,
}


const tokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action:PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
      state.userInfo = null;
    },
    setuserInfo: (state, action:PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setToken, clearToken, setuserInfo } =
  tokenSlice.actions;

export default tokenSlice.reducer;
