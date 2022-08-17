import { Stack, Grid, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Content from "../Components/Content/Content";
import Left from "../Left";
import Right from "../Right";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import axios from "axios";
import Carousell from "./SeriesComponents/Carousel/Carousel";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { useSelector, useDispatch } from "react-redux";
import { serieSelected } from "../state/media";
import { useNavigate } from "react-router";
const Series = () => {
  const popular = useSelector((state) => state.popularSerie);
  const toprated = useSelector((state) => state.topratedSerie);

  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="space-around"
      sx={{ paddingLeft: 40, paddingRight: 40 }}
    >
      <Typography
        variant="h2"
        pl={3}
        sx={{
          boxShadow: "0px 10px 0px 0px rgba(20,110,154,0.86)",
          transition: "all .25s ease-out",
          "&:hover": { transform: "rotate(-1deg)" },
        }}
      >
        <LiveTvIcon fontSize="large" sx={{ color: "rgba(20,110,154,0.86)" }} />
        Series
        <LiveTvIcon fontSize="large" sx={{ color: "rgba(20,110,154,0.86)" }} />
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          flex={3}
          p={6}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 7,
          }}
        >
          <Typography variant="h2" sx={{ p: 4 }}>
            <WhatshotIcon
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
            <br />
            Trending
            <SlideshowIcon
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
          </Typography>
          <Grid
            sx={{
              overflowX: "auto",
              borderRadius: "20px 20px 120px 20px",
              "&::-webkit-scrollbar": {
                width: "0.4em",
              },
            }}
            container
            spacing={2}
          >
            <Grid item xs={12} justifyContent="center" alignItems="center">
              <Carousell movies={popular} />
            </Grid>
          </Grid>
        </Box>
        <Box
          flex={5}
          p={6}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: 7,
          }}
        >
          <Typography variant="h2" sx={{ p: 4 }}>
            <WhatshotIcon
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
            <br />
            Mejor Valorados
            <br />
            <SlideshowIcon
              fontSize="large"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
          </Typography>
          <Grid
            sx={{
              overflowX: "auto",
              borderRadius: "20px 20px 120px 20px",
              "&::-webkit-scrollbar": {
                width: "0.4em",
              },
            }}
            container
            spacing={2}
          >
            <Grid item xs={12} justifyContent="center" alignItems="center">
              <Carousell movies={toprated} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Right />
    </Stack>
  );
};

export default Series;
