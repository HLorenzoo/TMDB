import React, { useEffect, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "../../SearchComponents/carr.css";
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
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { styled } from "@mui/material/styles";
import UpdateIcon from "@mui/icons-material/Update";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TranslateIcon from "@mui/icons-material/Translate";
import StarBorderIcon from "@mui/icons-material/StarBorder";

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

const SinglePageSerie = () => {
  const singlemovie = useSelector((state) => state.selectedSerie);
  return (
    <div>
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

export default SinglePageSerie;