import Search from "./Search";
import Carousel from "./SearchComponents/Carrousel";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./SearchComponents/carr.css";
import { useSelector } from "react-redux";
import { Stack, Grid, Box, Typography } from "@mui/material";
import SlideshowIcon from "@mui/icons-material/Slideshow";

export default function Carousal(props) {
  const searchRedux = useSelector((state) => state.search);
  console.log("searchin redux", searchRedux);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState(0);
  const [id, setId] = useState("");
  const [singlemovie, setSinglemovie] = useState(null);

  useEffect(() => {
    setMovies(searchRedux.results);
  }, [searchRedux]);

  const moveBehind = () => {
    value === -100 * (movies.length - 7) ? setValue(0) : setValue(value - 100);
  };
  const moveAhead = () => {
    console.log(value);
    value === 0 ? setValue(-100 * (movies.length - 7)) : setValue(value + 100);
  };
  return (
    <div className="bodyDiv">
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
        />{" "}
        <SlideshowIcon
          fontSize="large"
          sx={{ color: "rgba(20,110,154,0.86)" }}
        />
        Series
        <SlideshowIcon
          fontSize="large"
          sx={{ color: "rgba(20,110,154,0.86)" }}
        />
      </Typography>
      <div className="glider">
        {movies ? (
          movies.map((movie, index) => {
            return (
              <div
                key={index}
                className="glide"
                style={{ transform: `translateX(${value}%)` }}
              >
                <img
                  key={movie.id}
                  className="poster"
                  src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                  onClick={(e) => {
                    console.log("nombre de pelicula", movie);
                    setSinglemovie(movie);
                  }}
                />
                <Typography variant="h6" pl={3}>
                  {" "}
                  {movie.title}
                </Typography>
              </div>
            );
          })
        ) : (
          <div className="errorDiv">
            <h6>No hay componentes a renderizar</h6>
          </div>
        )}
      </div>
      {movies && (
        <div>
          <ArrowBackIos id="moveBehind" onClick={moveAhead} />
          <ArrowForwardIos id="moveAhead" onClick={moveBehind} />
        </div>
      )}
      {singlemovie ? <Carousel className="bodyDiv" movies={singlemovie} /> : ""}
    </div>
  );
}
