import { Button, styled, Stack, Box, Typography } from "@mui/material";
import { MovieCreationOutlined, SlideshowOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Buttons = () => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.light.button,
    color: "white",
    size: "large",
    height: "7vh",
    borderRadius: "8px 9px 24px 8px",
    "&:hover": {
      backgroundColor: theme.palette.light.buttonHover,
    },
  }));

  return (
    <Box
      direction="row"
      sx={{
        height: { xs: "100%", md: "100%" },
        display: { xs: "none", sm: "flex" },
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-around",
        px: "0.6rem",
        width: { xs: "10%", md: "25%" },
      }}
    >
      <Link to="/movies" style={{ textDecoration: "none" }}>
        <CustomButton sx={{ display: { xs: "none", md1: "flex" } }}>
          <MovieCreationOutlined sx={{ margin: { xs: 0, md: "0 5px" } }} />
          <Typography
            variant="h8"
            sx={{ display: { xs: "none", md: "initial" } }}
          >
            Movies
          </Typography>
        </CustomButton>
      </Link>
      <Link to="/series" style={{ textDecoration: "none" }}>
        <CustomButton sx={{ display: { xs: "none", md1: "flex" } }}>
          <SlideshowOutlined sx={{ margin: { xs: 0, md: "0 5px" } }} />
          <Typography
            variant="h8"
            sx={{ display: { xs: "none", md: "initial" } }}
          >
            Series
          </Typography>
        </CustomButton>
      </Link>
    </Box>
  );
};

export default Buttons;
