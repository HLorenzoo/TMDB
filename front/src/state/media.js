import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//action

export const getMovies = createAsyncThunk("GET_ALL_MOVIES", async () => {
  const res = await axios.get("api/media/movies");
  return res.data;
});
//refactor
export const getMoviesPopular = createAsyncThunk(
  "GET_POPULAR_MOVIES",
  async () => {
    const res = await axios.get("api/media/movies/popular");
    return res.data;
  }
);
export const getMoviesTopRated = createAsyncThunk(
  "GET_TOP_MOVIES",
  async () => {
    const res = await axios.get("api/media/movies/toprated");
    return res.data;
  }
);
export const getMoviesupcoming = createAsyncThunk(
  "GET_UPCOMING_MOVIES",
  async () => {
    const res = await axios.get("api/media/movies/upcoming");
    return res.data;
  }
);
export const movieSelected = createAsyncThunk(
  "SELECTED_MOVIE",
  async (movieid) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieid}?api_key=cf7662d405b231918672c758f8b2a04f`
    );
    return res.data;
  }
);
export const serieSelected = createAsyncThunk(
  "SELECTED_Serie",
  async (serieid) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${serieid}?api_key=cf7662d405b231918672c758f8b2a04f`
    );
    return res.data;
  }
);
//series refactor

export const getSeriePopular = createAsyncThunk(
  "GET_POPULAR_SERIE",
  async () => {
    const res = await axios.get("api/media/serie/popular");
    return res.data;
  }
);
export const getSerieTopRated = createAsyncThunk("GET_TOP_SERIE", async () => {
  const res = await axios.get("api/media/serie/toprated");
  return res.data;
});

export const getSeries = createAsyncThunk("GET_ALL_SERIES", async () => {
  const res = await axios.get("api/media/serie");
  return res.data;
});
export const searchAll = createAsyncThunk(
  "FIND_MOVIES_SERIES",
  async (name) => {
    const res = await axios.get(`api/search/${name}`);
    return res.data;
  }
);
//reducer
export const movieReducer = createReducer([], {
  [getMovies.fulfilled]: (state, action) => action.payload,
  [searchAll.fulfilled]: (state, action) => action.payload,
});
export const serieReducer = createReducer([], {
  [getSeries.fulfilled]: (state, action) => action.payload,
});
// MOVIE REDUCERS
export const moviePopularReducer = createReducer([], {
  [getMoviesPopular.fulfilled]: (state, action) => action.payload,
});
export const movieTopRatedReducer = createReducer([], {
  [getMoviesTopRated.fulfilled]: (state, action) => action.payload,
});
export const movieUpcomingReducer = createReducer([], {
  [getMoviesupcoming.fulfilled]: (state, action) => action.payload,
});
//SELECTED REDUCERS
export const selectedMovieReducer = createReducer([], {
  [movieSelected.fulfilled]: (state, action) => action.payload,
});
export const selectedSerieReducer = createReducer([], {
  [serieSelected.fulfilled]: (state, action) => action.payload,
});





//SERIE REDUCERS
export const seriePopularReducer = createReducer([], {
  [getSeriePopular.fulfilled]: (state, action) => action.payload,
});
export const serieTopRatedReducer = createReducer([], {
  [getSerieTopRated.fulfilled]: (state, action) => action.payload,
});
