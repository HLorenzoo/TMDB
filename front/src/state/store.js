import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import searchReducer from "./search";
import loginReducer from "./login";
import { movieReducer } from "./media";
import { serieReducer } from "./media";
import { moviePopularReducer } from "./media";
import { movieTopRatedReducer } from "./media";
import { movieUpcomingReducer } from "./media";
import { seriePopularReducer } from "./media";
import { serieTopRatedReducer } from "./media";
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    search: searchReducer,
    login: loginReducer,
    movies: movieReducer,
    series: serieReducer,
    popular: moviePopularReducer,
    toprated: movieTopRatedReducer,
    upcoming: movieUpcomingReducer,
    popularSerie: seriePopularReducer,
    topratedSerie: serieTopRatedReducer,
  },
});

export default store;
