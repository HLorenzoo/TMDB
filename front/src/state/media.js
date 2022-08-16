import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//action

export const getMovies = createAsyncThunk("LOG_IN", async () => {
  const res = await axios.post("api/media/movies");
  return res.data;
});
export const getSeries = createAsyncThunk("SIGN_UP", async () => {
  const res = await axios.post("api/media/series");
  return res.data;
});
export const searchAll = createAsyncThunk("ME_TOKENJWT", async (name) => {
  const res = await axios.get(`api/search/${name}`);
  return res.data;
});
//reducer
export const movieReducer = createReducer([], {
  [getMovies.fulfilled]: (state, action) => action.payload,
  [searchAll.fulfilled]: (state, action) => action.payload,
});
export const serieReducer = createReducer([], {
  [getSeries.fulfilled]: (state, action) => action.payload,
});
