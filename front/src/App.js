import "./App.css";
import { Button, Stack, Grid, Item, Typography, Box } from "@mui/material/";
import { HeadsetMic } from "@mui/icons-material";
import Navbar from "./Components/Navbar/Navbar";
import Example from "./Components/Carousel/Carousel";
import Left from "./Left";
import Right from "./Right";
import Content from "./Components/Content/Content";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Search from "./Pages/Search";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMe } from "./state/login";
import {
  getMovies,
  getSeries,
  getMoviesPopular,
  getMoviesTopRated,
  getMoviesupcoming,
  getSeriePopular,
  getSerieTopRated,
  // MOVIE REDUCERS
} from "./state/media";
import "./Style.css";
import User from "./Pages/User";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendMe());
    /*     dispatch(getMovies());
    dispatch(getSeries()); */
    dispatch(getMoviesupcoming());
    dispatch(getSeriePopular());
    dispatch(getSerieTopRated());
    dispatch(getMoviesPopular());
    dispatch(getMoviesTopRated());
  }, []);
  const popular = useSelector((state) => state.popular);
  const toprated = useSelector((state) => state.toprated);

  if (!popular.length)
    return (
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    );

  return (
    <div className="App">
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
