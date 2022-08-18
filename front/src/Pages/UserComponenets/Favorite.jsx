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
import { useSelector } from "react-redux";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { deleteFavorite } from "../../state/login";
import { useDispatch } from "react-redux";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1d95cf",
  padding: theme.spacing(0.75),
  margin: 22,
  boxShadow: " 15px 19px 43px -17px rgba(0,0,0,0.55)",
}));
const Favorites = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);

  const handleDelete = (movie) => {
    dispatch(deleteFavorite(movie));
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
        Favoritos!
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
          {user.favorites?.map((movie) => (
            <Box display="flex" alignItems="center">
              <Button
                sx={{ borderRadius: "50px" }}
                onClick={() => handleDelete(movie)}
              >
                <DeleteOutlineOutlinedIcon
                  sx={{ fontSize: "2.2rem", color: "#146e9a" }}
                />
              </Button>

              <Item sx={{ borderRadius: " 26px 26px 88px 0px " }}>
                <Stack
                  direction="row"
                  spacing={2}
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
                      {movie.original_title ? movie.original_title : movie.name}
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
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Favorites;
