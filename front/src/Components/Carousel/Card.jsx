import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { CardActionArea, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
export default function ActionAreaCard({ pelicula }) {
  return (
    <Card
      sx={{
        borderRadius: 16,
        container: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Card sx={{ position: "relative" }}>
        <CardActionArea sx={{ position: "relative" }}>
          <CardMedia
            sx={{ height: "600px" }}
            media="picture"
            image={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`}
          >
            <CardContent
              className="fiCardContent"
              sx={{
                position: "relative",
                backgroundColor: "transparent",
              }}
            >
              <Typography
                gutterBottom
                variant="h3"
                component="h1"
                sx={{
                  color: "rgba(255,255,255,0.78)",
                  backgroundColor: "rgba(0,0,0,.74)",
                  borderRadius: 4,
                  m: 2,
                  maxWidth: "70%",
                }}
              >
                {pelicula.original_title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.78)",
                  backgroundColor: "rgba(0,0,0,.74)",
                  borderRadius: 4,
                  m: 5,
                  maxWidth: "90%",
                }}
                component="p"
              >
                {pelicula.overview}
              </Typography>
              <Box
                sx={{
                  color: "rgba(255,255,255,0.78)",
                  backgroundColor: "rgba(0,0,0,.84)",
                  borderRadius: 4,
                  marginLeft: 10,

                  maxWidth: "20%",
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <StarIcon fontSize="medium" />
                <Typography gutterBottom variant="h5" component="p">
                  {`${
                    pelicula.vote_average ? pelicula.vote_average : "No Rating"
                  }`}
                </Typography>
              </Box>
            </CardContent>
          </CardMedia>
        </CardActionArea>
      </Card>
    </Card>
  );
}
