import React, { useState, useEffect } from "react";
import axios from "axios";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import {
  Box,
  Grid,
  styled,
  Paper,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useSelector, useDispatch } from "react-redux";
import { movieSelected } from "../../state/media";
import { useNavigate } from "react-router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1d95cf",
  padding: theme.spacing(0.75),
  margin: 22,
  boxShadow: " 15px 19px 43px -17px rgba(0,0,0,0.55)",
}));
const LatScroll = () => {
  /*   const [movies, setMovies] = useState([]); */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.toprated);
  /*   useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=cf7662d405b231918672c758f8b2a04f&language=en-US&page=${Math.floor(
          Math.random() * 8 + 1
        )}`
      )
      .then((res) => setMovies(res.data.results));
  }, []);
 */
  const handelClick = (movie) => {
    console.log("movie clickeada", movie);
    dispatch(movieSelected(movie.id)).then(() =>
      navigate(`/movies/${movie.id}}`)
    );
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Typography
        variant="h4"
        pl={12.5}
        mb={3}
        sx={{
          boxShadow: "0px 10px 0px 0px rgba(20,110,154,0.86)",
          transition: "all .25s ease-out",
          "&:hover": { transform: "rotate(-1deg)" },
        }}
      >
        Trending
        <WhatshotIcon fontSize="large" sx={{ color: "#146e9a" }} />
      </Typography>
      <br />
      <Grid
        sx={{
          maxHeight: "77vh",
          overflow: "auto",
          backgroundColor: "white",
          boxShadow: "3px 10px 20px -3px rgba(20,110,154,1) ",
          border: "1px solid #146e9a",
          borderRadius: "20px 20px 120px 20px",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
        }}
        container
        spacing={2}
      >
        <Grid item xs={12} justifyContent="center" alignItems="center">
          {movies.map((movie) => (
            <Button
              onClick={() => {
                handelClick(movie);
              }}
            >
              <Item sx={{ borderRadius: " 26px 26px 88px 0px " }}>
                <Stack
                  direction="row"
                  spacing={3}
                  justifyContent="space-around"
                >
                  <Box flex={1} sx={{ display: { xs: "none", md1: "block" } }}>
                    <Box
                      component="img"
                      sx={{
                        borderRadius: 3,
                        boxShadow: " 15px 19px 43px -17px rgba(5,5,5,0.53)",
                      }}
                      alt="Hernu Logo"
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    />
                  </Box>
                  <Box flex={2} sx={{ display: { xs: "none", md1: "block" } }}>
                    <Typography
                      gutterBottom
                      variant="h7"
                      component="p"
                      sx={{
                        p: 2,
                        color: "rgba(255,255,255,0.78)",
                        backgroundColor: "#146e9a",
                        borderRadius: 3,
                        borderRadius: " 26px 26px 128px 0px ",
                      }}
                    >
                      {movie.original_title}
                    </Typography>
                    <Box
                      sx={{
                        p: 0,
                        display: "flex",
                        alignItems: "initial",
                        color: "rgba(255,255,255,0.78)",
                        backgroundColor: "#146e9a",
                        borderRadius: 3,
                        borderRadius: " 26px 26px 128px 0px ",
                        maxWidth: "80%",
                      }}
                    >
                      <StarIcon fontSize="medium" />
                      <Typography gutterBottom variant="body1" component="p">
                        {`${
                          movie.vote_average ? movie.vote_average : "No Rating"
                        }`}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Item>
            </Button>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatScroll;
