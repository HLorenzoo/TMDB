import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Carousell from "../Carousel/Carousel";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LatScroll from "./LatScroll";
import axios from "axios";
import { useSelector } from "react-redux";
import LatScrollRig from "./LatscrollRig";
const Content = () => {
  /*  const [movies, setMovies] = useState([]); */
  /*   const movies = useSelector((state) => state.movies); */
  const movies = useSelector((state) => state.popular);
  /*   useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=cf7662d405b231918672c758f8b2a04f&language=en-US&page=${Math.floor(
          Math.random() * 6 + 0
        )}`
      )
      .then((res) => setMovies(res.data.results));
  }, []); */

  return (
    <Box flex={6} p={6}>
      <Stack direction="row" spacing={6} alignItems="center">
        <Box marginBottom={4} flex={1}>
          <LatScroll />
        </Box>
        <Stack flex={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              m: 4,
            }}
          >
            <WhatshotIcon
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
            <Typography
              variant="h2"
              sx={{
                /*  boxShadow: "0px 10px 0px 0px rgba(20,110,154,0.86)", */
                transition: "all .25s ease-out",
                "&:hover": { transform: "rotate(-1deg)" },
              }}
            >
              Lo mas visto
            </Typography>
            <WhatshotIcon
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
          </Box>

          <Carousell movies={movies} />
        </Stack>
        <Box marginBottom={4} flex={1}>
          <LatScrollRig />
        </Box>
      </Stack>
    </Box>
  );
};

export default Content;
