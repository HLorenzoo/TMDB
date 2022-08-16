import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//action

export const logIn = createAsyncThunk("LOG_IN", async (user) => {
  const res = await axios.post("api/auth/login", user);
  return res.data;
});
export const signUp = createAsyncThunk("SIGN_UP", async (user) => {
  const res = await axios.post("api/auth/signup", user);
  return res.data;
});
export const sendMe = createAsyncThunk("ME_TOKENJWT", async () => {
  const res = await axios.get("api/auth/me");
  return res.data;
});
export const logOut = createAsyncThunk("LOG_OUT", async () => {
  const res = await axios.post("api/auth/logout");
  return res.data;
});
//reducer
const loginReducer = createReducer([], {
  [logIn.fulfilled]: (state, action) => action.payload,
  [signUp.fulfilled]: (state, action) => action.payload,
  [sendMe.fulfilled]: (state, action) => action.payload,
  [logOut.fulfilled]: (state, action) => action.payload,
});

export default loginReducer;
