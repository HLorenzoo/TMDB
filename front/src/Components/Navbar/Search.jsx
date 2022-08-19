import {
  TextField,
  styled,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Menu,
  MenuItem,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Slide,
  Box,
  IconButton,
} from "@mui/material";
import React from "react";
import { PersonPin, AddBox } from "@mui/icons-material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SingUp from "./Singup";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovies, getSearchSerie } from "../../state/search";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { logOut } from "../../state/login";
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.light.button,
  color: "white",
  size: "large",
  borderRadius: 10,
  "&:hover": {
    backgroundColor: theme.palette.light.buttonHover,
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Search = (props) => {
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const [search, setsearch] = useState("");

  const handleChange = (event) => {
    setsearch(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    search &&
      dispatch(getSearchMovies(search))
        .then(() => {
          dispatch(getSearchSerie(search));
        })
        .then(() => navigate("/search"));
  };
  const handelLogOut = (e) => {
    dispatch(logOut()).then(() => navigate("/"));
    setOpenLogin(!openLogin);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CustomButton>
        <SearchIcon
          sx={{ fontSize: 40, height: "4.5vh" }}
          onClick={handleSubmit}
        />
      </CustomButton>
      <FormControl sx={{ flexGrow: 1, width: "100%", minWidth: 300 }}>
        <InputLabel htmlFor="component-filled">
          Busca tu Pelicula o Serie Fav!
        </InputLabel>
        <OutlinedInput
          id="component-filled"
          value={search}
          onChange={handleChange}
          label="search"
          sx={{
            backgroundColor: "white",
            width: "100%",
            borderRadius: "10px 15px 30px 0px",
          }}
        />
      </FormControl>
      <CustomButton onClick={(e) => setOpenLogin(!openLogin)}>
        <PersonPin
          sx={{ fontSize: 45, display: { xs: "none", md1: "flex" } }}
        />
        <AddBox
          onClick={(e) => setOpen(!open)}
          sx={{ fontSize: 40, display: { xs: "block", md1: "none" } }}
        />
      </CustomButton>
      {user.email ? (
        <Dialog
          open={openLogin}
          TransitionComponent={Transition}
          keepMounted
          onClose={(e) => setOpenLogin(!openLogin)}
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{
            sx: { borderRadius: "14px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "fit-content",
              m: 3,
            }}
          >
            <Link to="/user" style={{ textDecoration: "none" }}>
              <IconButton
                sx={{ width: "100%" }}
                onClick={(e) => setOpenLogin(!openLogin)}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1d95cf",
                    "&:hover": { backgroundColor: "#146e9a" },
                    borderRadius: 5,
                    /* width: "100%", */
                  }}
                >
                  <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
                  <DialogTitle sx={{ color: "white" }}>
                    {user.username}
                  </DialogTitle>
                </Box>
              </IconButton>
            </Link>

            {/*    <Link to="/user" style={{ textDecoration: "none" }}>
              <CustomButton
                sx={{ m: 2 }}
                onClick={(e) => setOpenLogin(!openLogin)}
              >
                Perfil Usuario
              </CustomButton>
            </Link> */}
            <CustomButton sx={{ m: 2 }} onClick={handelLogOut}>
              <LogoutIcon /> Log Out!
            </CustomButton>
          </Box>
        </Dialog>
      ) : (
        <Dialog
          open={openLogin}
          TransitionComponent={Transition}
          keepMounted
          onClose={(e) => setOpenLogin(!openLogin)}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            Unetenos!
            <WhatshotIcon
              fontSize="medium"
              sx={{ color: "rgba(20,110,154,0.86)" }}
            />
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <SingUp handlePopUp={setOpenLogin} />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
      {
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>
            <CustomButton>Movies</CustomButton>
          </MenuItem>
          <MenuItem>
            <CustomButton>Series</CustomButton>
          </MenuItem>
          <MenuItem>
            <CustomButton>Login</CustomButton>
          </MenuItem>
        </Menu>
      }
    </div>
  );
};

export default Search;
