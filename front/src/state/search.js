import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//action

export const getSearch = createAsyncThunk("SEARCHING_DATA", async (name) => {
  const res = await axios.get(`api/media/search/${name}`);
  return res.data;
});

//reducer
const searchReducer = createReducer([], {
  [getSearch.fulfilled]: (state, action) => action.payload,
});

export default searchReducer;
