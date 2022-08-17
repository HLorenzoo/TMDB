import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//action

export const getSearchMovies = createAsyncThunk(
  "SEARCHING_MOVIE",
  async (name) => {
    const res = await axios.get(`api/media/searchM/${name}`);
    return res.data;
  }
);
export const getSearchSerie = createAsyncThunk(
  "SEARCHING_SERIE",
  async (name) => {
    const res = await axios.get(`api/media/searchS/${name}`);
    return res.data;
  }
);

//reducer
export const searchMovieReducer = createReducer([], {
  [getSearchMovies.fulfilled]: (state, action) => action.payload,
});

export const searchSerieReducer = createReducer([], {
  [getSearchSerie.fulfilled]: (state, action) => action.payload,
});
