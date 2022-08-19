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
import LatScroll from "./LatScroll";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1d95cf",
  padding: theme.spacing(0.95),
  margin: 22,
  minWidth: "100%",
  boxShadow: " 15px 19px 43px -17px rgba(0,0,0,0.55)",
}));
const LatScrollRig = () => {
  /*   const [movies, setMovies] = useState([]); */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.popular);
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
      <Box
        sx={{
          display: "flex",
          alignItems: "space-around",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          pl={1.5}
          mb={3}
          sx={{
            /* ", */
            transition: "all .25s ease-out",
            "&:hover": { transform: "rotate(-1deg)" },
          }}
        >
          Populares
        </Typography>{" "}
        <WhatshotIcon fontSize="large" sx={{ color: "#146e9a" }} />
      </Box>

      <Grid
        sx={{
          maxHeight: "77vh",
          overflow: "auto",
          backgroundColor: "white",
          boxShadow: " -3px 10px 20px 2px rgba(20,110,154,1) ",
          border: "1px solid #146e9a",
          borderRadius: "20px 20px 20px 120px",
          "&.MuiGrid-root": { ml: 0, mt: 0, boxSizing: "content-box" },
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
        }}
        container
        spacing={1.5}
      >
        <Grid item xs={12} justifyContent="center" alignItems="center">
          {movies.map((movie) => (
            <Button
              sx={{ width: "100%" }}
              onClick={() => {
                handelClick(movie);
              }}
            >
              <Item
                sx={{
                  borderRadius: " 26px 26px 0px 68px ",
                  "&:hover": {
                    "box-shadow": "-10px 10px 11px 2px rgba(0,66,102,0.92)",
                  },
                }}
              >
                <Stack
                  direction="row"
                  spacing={2.5}
                  justifyContent="space-around"
                >
                  <Box
                    flex={2}
                    sx={{
                      textAlign: "rigth",
                      alignItems: "flex-end",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="p"
                      sx={{
                        p: 2,
                        wordBreak: "break-all",

                        color: "rgba(255,255,255,0.78)",
                        backgroundColor: "#146e9a",
                        borderRadius: 3,
                        width: "76%",
                        borderRadius: " 26px 26px 0px 88px ",
                      }}
                    >
                      {movie.original_title}
                    </Typography>
                    <Box
                      sx={{
                        p: 0,
                        display: "flex",
                        alignItems: "rigth",
                        color: "rgba(255,255,255,0.78)",
                        backgroundColor: "#146e9a",
                        borderRadius: 3,
                        borderRadius: " 26px 26px 0px 128px ",
                        maxWidth: "80%",
                        width: "100%",
                        justifyContent: "space-around",
                      }}
                    >
                      <Typography gutterBottom variant="body1" component="p">
                        {`${
                          movie.vote_average ? movie.vote_average : "No Rating"
                        }`}
                      </Typography>
                      <StarIcon fontSize="medium" />
                    </Box>
                  </Box>
                  <Box flex={1} sx={{ display: { xs: "none", md1: "block" } }}>
                    <Box
                      component="img"
                      sx={{
                        borderRadius: 3,
                        boxShadow: "  -3px 10px 11px 2px rgba(0,0,0,0.4)",
                      }}
                      alt="Hernu Logo"
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    />
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

export default LatScrollRig;
