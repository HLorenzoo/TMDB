import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    light: {
      main: " #35a9e2",
      button: "#1d95cf",
      buttonHover: "#146e9a",
    },
    dark: {
      main: "#1f212b",
      button: "#474c67",
      buttonHover: " #777ea7",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      mobile:415,
      sm: 600,
      md1:750,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },

});
