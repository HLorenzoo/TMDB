import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import axios from "axios";
import CardsPelis from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { movieSelected } from "../../state/media";
import { useNavigate } from "react-router";
export default function Carousell({ movies }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelClick = (movie) => {
    console.log("movie clickeada", movie);
    dispatch(movieSelected(movie.id)).then(() =>
      navigate(`/movies/${movie.id}}`)
    );
  };

  return (
    <Carousel
      NextIcon={<KeyboardArrowRight fontSize="large" />}
      PrevIcon={<KeyboardArrowLeft fontSize="large" />}
      indcators={true}
      navButtonsAlwaysVisible={true}
    >
      {movies.map((pelicula) => (
        <Button
          onClick={() => {
            handelClick(pelicula);
          }}
        >
          <CardsPelis pelicula={pelicula} />
        </Button>
      ))}
    </Carousel>
  );
}
