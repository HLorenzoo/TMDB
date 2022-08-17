import Search from "./Search";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
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
import { useSelector } from "react-redux";

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
const CarrSer = () => {
  const [value, setValue] = useState(0);
  const [id, setId] = useState("");
  const [singlemovie, setSinglemovie] = useState(null);
  const movies = useSelector((state) => state.searchM);

  const moveBehindd = () => {
    value === -100 * (movies.length - 7) ? setValue(0) : setValue(value - 100);
  };
  const moveAheadd = () => {
    value === 0 ? setValue(-100 * (movies.length - 7)) : setValue(value + 100);
  };
  return (
    <div>
      {" "}
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
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
                      : "https://m.media-amazon.com/images/I/61FQCSP7ZIL._SS500_.jpg"
                  }
                  onClick={(e) => {
                    console.log("nombre de pelicula", movie);
                    setSinglemovie(movie);
                  }}
                />
                <br />
                <Typography variant="h5" pl={3}>
                  {movie.name ? movie.name : "No hay nombres en db"}
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
          <ArrowBackIos id="moveBehindd" onClick={moveAheadd} />
          <ArrowForwardIos id="moveAheadd" onClick={moveBehindd} />
        </div>
      )}
      {singlemovie ? (
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
            {singlemovie.title ? singlemovie.title : "No hay datos en db"}
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
              {singlemovie.title ? singlemovie.title : "No hay datos en db"}
              <Button>
                <StarBorderIcon sx={{ fontSize: 40 }} />
              </Button>
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
      ) : (
        "nada"
      )}
    </div>
  );
};

export default CarrSer;
