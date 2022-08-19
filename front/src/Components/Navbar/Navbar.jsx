import { AppBar, styled, Toolbar, Box, TextField } from "@mui/material";
import React from "react";
import TheaterComedyOutlinedIcon from "@mui/icons-material/TheaterComedyOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import Buttons from "./Buttons";
import { minHeight } from "@mui/system";
import Search from "./Search";
import { Link } from "react-router-dom";

//custom components
const CustomToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.light.main,
  height: 90,
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <CustomToolBar>
        <Link to="/">
          <Box
            component="img"
            sx={{
              height: 50,
              width: 350,
              borderRadius: 20,
              transition: "all .25s ease-out",
              "&:hover": { transform: "rotate(-2deg)" },
              display: { xs: "none", md1: "block" },
            }}
            alt="Hernu Logo"
            src="https://i.ibb.co/vHLDTcg/logo.png"
          />
        </Link>

        <Box
          component="img"
          sx={{
            height: 50,
            borderRadius: 20,
            width: 0,
            "&:hover": {},
            display: { xs: "block", md1: "none" },
          }}
          alt="Hernu Logo"
          src="https://i.ibb.co/vHLDTcg/logo.png"
        />
        <Box
          component="img"
          sx={{
            height: "100%",
            display: { xs: "block", md1: "none" },
            objectFit: "contain",
          }}
          alt="Hernu Logo"
          src="https://i.ibb.co/59Zh8R0/logo.png"
        />
        <Buttons />
        <Search />
      </CustomToolBar>
    </AppBar>
  );
};

export default Navbar;
