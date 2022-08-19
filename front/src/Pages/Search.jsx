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
import { SingleMovie } from "./SearchComponents/SingleMovie";
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

export default function Carousal(props) {
  const searchMoviesRedux = useSelector((state) => state.searchM);
  const searchSeriesRedux = useSelector((state) => state.searchS);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState(0);
  const [id, setId] = useState("");
  const [singlemovie, setSinglemovie] = useState(null);
  const movie = { m: "Movies" };
  const serie = { m: "Series" };
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.login);
  /*   const addTofav = (movie) => {
    dispatch(setNewFavorite(movie));
  }; */

  useEffect(() => {
    setMovies(searchMoviesRedux.results);
  }, [searchMoviesRedux]);

  return (
    <div className="bodyDiv">
      <Box>
        <Carr
          fn={setSinglemovie}
          nombre={"SERIES"}
          movies={searchMoviesRedux.results}
        />
      </Box>
      <Box>
        <Carr
          fn={setSinglemovie}
          nombre={"MOVIES"}
          movies={searchSeriesRedux.results}
        />
      </Box>
      {singlemovie && (
        <SingleMovie favorites={favorites} singlemovie={singlemovie} />
      )}
    </div>
  );
}
