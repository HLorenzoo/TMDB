import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "../../state/login";
import { useNavigate } from "react-router";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">HL TMDB</Link> {2022}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const SignUp = ({ handlePopUp }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handelRegisterInputs = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const handelLoginInputs = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handelRegister = (event) => {
    event.preventDefault();
    dispatch(signUp(register)).then(() => handlePopUp(false), navigate("/"));
  };
  const handelLogin = (event) => {
    event.preventDefault();
    dispatch(logIn(login)).then(() => handlePopUp(false), navigate("/"));
  };
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={5} justifyContent="space-around">
        <Box component="main" maxWidth="xs" flex={4}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "rgba(20,110,154,0.86)" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registrarse
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handelRegister}
              sx={{ mt: 3, mb: 6 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    onChange={handelRegisterInputs}
                    autoComplete="given-name"
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="Tu nombre de usuario"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handelRegisterInputs}
                    required
                    fullWidth
                    id="email"
                    label="Tu direccion de email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handelRegisterInputs}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="Tu contraseña"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "rgba(20,110,154,0.86)" }}
              >
                Registrarse
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item></Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box component="main" maxWidth="xs" flex={3}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "rgba(20,110,154,0.86)" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handelLogin}
              sx={{ mt: 3, mb: 6 }}
            >
              <Grid container spacing={7}>
                <Grid item xs={12}>
                  <TextField
                    onChange={handelLoginInputs}
                    required
                    fullWidth
                    id="email"
                    label="Tu direccion de email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handelLoginInputs}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="Tu contraseña"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "rgba(20,110,154,0.86)" }}
              >
                Logueate!
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item></Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Stack>
      <Copyright sx={{ mt: 5 }} />
    </ThemeProvider>
  );
};

export default SignUp;
