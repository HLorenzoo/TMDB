import Search from "./Search";
import Carousel from "./SearchComponents/Carrousel";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./SearchComponents/carr.css";
import { useSelector } from "react-redux";
import {
  Stack,
  Grid,
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import CardIndividual from "./SearchComponents/CardIndividual";
import { styled } from "@mui/material/styles";
import UpdateIcon from "@mui/icons-material/Update";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TranslateIcon from "@mui/icons-material/Translate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Carr from "./Carr";
import CarrSer from "./CarrSer";
import { useDispatch } from "react-redux";
import { setNewFavorite } from "../state/login";
import StarIcon from "@mui/icons-material/Star";
import { useLocation, useParams } from "react-router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  alignItems: "center",
  justifyContent: "space-around",
  display: "flex",
  borderRadius: 5,
  color: theme.palette.text.secondary,
}));

const SinglePage = () => {
  const id = useLocation().pathname.slice(8).split("%")[0];

  const singlem = useParams();
  const dispatch = useDispatch();
  /* const singlemovie = useSelector((state) => state.selectedMovie); */
  const { favorites } = useSelector((state) => state.login);

  const [active, setActive] = useState(false);
  const addTofav = (movie) => {
    dispatch(setNewFavorite(movie));

    setActive(true);
  };

  //
  const [singlemovie, setSinglemovie] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=cf7662d405b231918672c758f8b2a04f&language=en-US`
      )
      .then((res) => setSinglemovie(res.data));
  }, []);
  useEffect(() => {
    const result = favorites?.filter(
      (movie) => movie.id === singlemovie.id
    ).length;
    setActive(result ? true : false);
  }, [singlemovie.id, setActive]);

  console.log(id);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
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
        {singlemovie.title
          ? singlemovie.title
          : singlemovie.name
          ? singlemovie.name
          : "No hay datos en db"}
        <SlideshowIcon
          fontSize="large"
          sx={{ color: "rgba(20,110,154,0.86)" }}
        />
      </Typography>
      <br />
      <Paper
        sx={{
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: "20%",
            width: "20%",
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.53)",
            borderRadius: "30px 10px 108px 6px",
          }}
          alt="The house from the offer."
          src={`https://image.tmdb.org/t/p/w780/${singlemovie.poster_path}`}
        />
        <Typography
          variant="h2"
          pl={3}
          sx={{
            color: "rgba(255,255,255,0.78)",
            backgroundColor: "rgba(0,0,0,.74)",
            borderRadius: 4,
          }}
        >
          <ArrowForwardIos
            fontSize="large"
            sx={{ color: "rgba(20,110,154,0.86)" }}
          />{" "}
          Titulo :{" "}
          {singlemovie.title
            ? singlemovie.title
            : singlemovie.name
            ? singlemovie.name
            : "No hay datos en db"}
          {/*  */}
          <IconButton onClick={() => addTofav(singlemovie)}>
            <StarIcon
              sx={{
                fontSize: 40,
                backgroundColor: active ? "#fcac0c" : "#fff",
                borderRadius: "100%",
                transition: "all 0.3s ease-in-out",
                transform: active ? "scale(1.1)" : "scale(0.9)",
                /* "&::after": { },
              "&::before": { transform: active && "scale(1)" }, */
              }}
            />
          </IconButton>
          <br />
          <br />
          <Typography variant="h4" pl={3}>
            {" "}
            <ArrowForwardIos
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />{" "}
            Descripcion: {singlemovie.overview}
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                sx={{
                  maxHeight: "200px",
                }}
                container
                spacing={4}
              >
                <Grid item xs={2}>
                  <Item>
                    <UpdateIcon
                      sx={{
                        fontSize: "medium",
                        color: "rgba(20,110,154,0.86)",
                      }}
                    />
                    Year :
                    {singlemovie.release_date
                      ? singlemovie.release_date
                      : "no data"}
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <AutoAwesomeIcon
                      sx={{
                        fontSize: "medium",
                        color: "rgba(20,110,154,0.86)",
                      }}
                    />
                    Valoracion :
                    {singlemovie.vote_average
                      ? singlemovie.vote_average
                      : "no data"}
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <TranslateIcon
                      sx={{
                        fontSize: "medium",
                        color: "rgba(20,110,154,0.86)",
                      }}
                    />
                    Idioma :
                    {singlemovie.original_language
                      ? singlemovie.original_language
                      : "no data"}
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Typography>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SinglePage;
