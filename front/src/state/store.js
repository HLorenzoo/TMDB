import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import searchReducer from "./search";
import loginReducer from "./login";
import { movieReducer } from "./media";
import { serieReducer } from "./media";
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    search: searchReducer,
    login: loginReducer,
    movie: movieReducer,
    serie: serieReducer,
  },
});

export default store;
