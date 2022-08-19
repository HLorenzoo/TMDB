import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//action

export const logIn = createAsyncThunk("LOG_IN", async (user) => {
  const res = await axios.post("/api/auth/login", user);
  return res.data;
});
export const signUp = createAsyncThunk("SIGN_UP", async (user) => {
  const res = await axios.post("/api/auth/signup", user);
  return res.data;
});
export const sendMe = createAsyncThunk("ME_TOKENJWT", async () => {
  const { data } = await axios.get("/api/auth/me");

  const res = await axios.get(`/api/users/${data._id}`);

  return res.data[0];
});
export const logOut = createAsyncThunk("LOG_OUT", async () => {
  const res = await axios.post("/api/auth/logout");
  return res.data;
});

export const getOneUser = createAsyncThunk("GET_ONE_USER", async (_id) => {
  const res = await axios.get(`/api/users/${_id}`);
  return res.data;
});
/* 
export const setNewFavorite = createAsyncThunk(
  "SET_FAVORITE",
  async (fav, thunkAPI) => {
    const { _id } = thunkAPI.getState().login;
    const res = await axios.put(`/api/users/${_id}/favorites`, fav);
    return res.data;
  }
); */
export const setNewFavorite = createAsyncThunk(
  "SET_FAVORITE",
  async (fav, thunkAPI) => {
    const { _id } = thunkAPI.getState().login;
    const res = await axios.post(`/api/users/addFav/${_id}`, {
      favorites: fav,
    });
    return res.data;
  }
);

export const deleteFavorite = createAsyncThunk(
  "DELETE_FAVORITE",
  async (fav, thunkAPI) => {
    const { _id } = thunkAPI.getState().login;
    const res = await axios.put(`/api/users/deleteFav/${_id}`, {
      favorites: fav,
    });
    return res.data;
  }
);

//reducer
const loginReducer = createReducer([], {
  [logIn.fulfilled]: (state, action) => action.payload,
  [signUp.fulfilled]: (state, action) => action.payload,
  [sendMe.fulfilled]: (state, action) => action.payload,
  [logOut.fulfilled]: (state, action) => action.payload,
  [setNewFavorite.fulfilled]: (state, action) => action.payload,
  [getOneUser.fulfilled]: (state, action) => action.payload,
  [deleteFavorite.fulfilled]: (state, action) => action.payload,
});

export default loginReducer;
