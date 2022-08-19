import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import loginReducer from "./login";
import { movieReducer } from "./media";
import { serieReducer } from "./media";
import { moviePopularReducer } from "./media";
import { movieTopRatedReducer } from "./media";
import { movieUpcomingReducer } from "./media";
import { seriePopularReducer } from "./media";
import { serieTopRatedReducer } from "./media";
import { searchSerieReducer } from "./search";
import { searchMovieReducer } from "./search";
import { selectedMovieReducer } from "./media";
import { selectedSerieReducer } from "./media";
const store = configureStore({
  /*  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), */
  reducer: {
    //search-Login
    searchM: searchMovieReducer,
    searchS: searchSerieReducer,
    login: loginReducer,
    //movies-Series
    popular: moviePopularReducer,
    toprated: movieTopRatedReducer,
    upcoming: movieUpcomingReducer,
    popularSerie: seriePopularReducer,
    topratedSerie: serieTopRatedReducer,
    //selected
    selectedMovie: selectedMovieReducer,
    selectedSerie: selectedSerieReducer,
  },
});

export default store;
