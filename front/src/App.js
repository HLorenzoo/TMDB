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
import { getMovies, getSeries } from "./state/media";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector();
  useEffect(() => {
    dispatch(sendMe());
    dispatch(getMovies());
    dispatch(getSeries());
  }, []);
  const movies = useSelector((state)=>state.movie);
  const series = useSelector((state)=>state.serie);
  return (
    <div className="App">
      <Box>
        <Navbar />
        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
