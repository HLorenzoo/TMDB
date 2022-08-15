import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import axios from "axios";
import CardsPelis from "./Card";
export default function CarousellSerie({ movies }) {
  return (
    <Carousel
      NextIcon={<KeyboardArrowRight fontSize="large" />}
      PrevIcon={<KeyboardArrowLeft fontSize="large" />}
      indcators={true}
      navButtonsAlwaysVisible={true}
    >
      {movies.map((pelicula) => (
        <>
          <CardsPelis pelicula={pelicula} />
        </>
      ))}
    </Carousel>
  );
}
