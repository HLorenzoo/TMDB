import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { CardActionArea } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
/* const FiCard = styled({
  root: {
    position: "relative",
  },
})(Card);

const FiCardActionArea = withStyles({
  root: {
    position: "relative",
  },
})(CardActionArea);

const FiCardActions = withStyles({
  root: {
    position: "relative",
  },
})(CardActions);

const FiCardContent = withStyles({
  root: {
    position: "relative",
    backgroundColor: "transparent",
  },
})(CardContent);

const FiCardMedia = withStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
})(CardMedia);
 */
const CardIndividual = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          sx={{ maxWidth: 300 }}
          image="/material-ui-lizard.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie ? movie.title : "Sin nada"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardIndividual;
