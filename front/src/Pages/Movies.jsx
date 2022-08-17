import { Stack, Grid, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Content from "../Components/Content/Content";
import Left from "../Left";
import Right from "../Right";
import CardMovie from "./MoviesComponentes/CardMovies";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import axios from "axios";
import Carousell from "../Components/Carousel/Carousel";
import { useSelector } from "react-redux";
const Movies = () => {
  /*   const [movies, setMovies] = useState(["popular"]);
  const [moviess, setMoviess] = useState(["top_rated"]);
  const [moviesss, setMoviesss] = useState(["upcoming"]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=cf7662d405b231918672c758f8b2a04f&language=en-US&page=${Math.floor(
          Math.random() * 6 + 0
        )}`
      )
      .then((res) => setMovies(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=cf7662d405b231918672c758f8b2a04f&language=en-US&page=${Math.floor(
          Math.random() * 6 + 0
        )}`
      )
      .then((res) => setMoviess(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=cf7662d405b231918672c758f8b2a04f&language=en-US&page=${Math.floor(
          Math.random() * 6 + 0
        )}`
      )
      .then((res) => setMoviesss(res.data.results));
  }, []);
 */
  const popular = useSelector((state) => state.popular);
  const toprated = useSelector((state) => state.toprated);
  const upcoming = useSelector((state) => state.upcoming);
  
  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="space-around"
      sx={{ paddingLeft: 40, paddingRight: 40 }}
    >
      <Typography
        variant="h2"
        pl={3}
        sx={{
          boxShadow: "0px 10px 0px 0px rgba(20,110,154,0.86)",
          transition: "all .25s ease-out",
          "&:hover": { transform: "rotate(-1deg)" },
        }}
      >
        <SlideshowIcon
          fontSize="large"
          sx={{ color: "rgba(20,110,154,0.86)" }}
        />
        Movies
        <SlideshowIcon
          fontSize="large"
          sx={{ color: "rgba(20,110,154,0.86)" }}
        />
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          flex={3}
          p={6}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 7,
          }}
        >
          <Typography variant="h2" sx={{ p: 4 }}>
            <WhatshotIcon
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
            <br />
            Trending
            <SlideshowIcon
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
          </Typography>
          <Grid
            sx={{
              overflowX: "auto",
              borderRadius: "20px 20px 120px 20px",
              "&::-webkit-scrollbar": {
                width: "0.4em",
              },
            }}
            container
            spacing={2}
          >
            <Grid item xs={12} justifyContent="center" alignItems="center">
              <Carousell movies={popular} />
            </Grid>
          </Grid>
        </Box>
        <Box
          flex={5}
          p={6}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: 7,
          }}
        >
          <Typography variant="h2" sx={{ p: 4 }}>
            <WhatshotIcon
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
            <br />
            Mejor Valorados
            <br />
            <SlideshowIcon
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
          </Typography>
          <Grid
            sx={{
              overflowX: "auto",
              borderRadius: "20px 20px 120px 20px",
              "&::-webkit-scrollbar": {
                width: "0.4em",
              },
            }}
            container
            spacing={2}
          >
            <Grid item xs={12} justifyContent="center" alignItems="center">
              <Carousell movies={toprated} />
            </Grid>
          </Grid>
        </Box>
        <Box
          flex={5}
          p={6}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 7,
          }}
        >
          <Typography variant="h2" sx={{ p: 4 }}>
            <WhatshotIcon
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
            <br />
            Estrenos
            <SlideshowIcon
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
          </Typography>
          <Grid
            sx={{
              overflowX: "auto",
              borderRadius: "20px 20px 120px 20px",
              "&::-webkit-scrollbar": {
                width: "0.4em",
              },
            }}
            container
            spacing={2}
          >
            <Grid item xs={12} justifyContent="center" alignItems="center">
              <Carousell movies={upcoming} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Right />
    </Stack>
  );
};

export default Movies;
