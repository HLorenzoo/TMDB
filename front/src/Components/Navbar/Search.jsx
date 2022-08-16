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
} from "@mui/material";
import React from "react";
import { PersonPin, AddBox } from "@mui/icons-material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SingUp from "./Singup";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useDispatch } from "react-redux";
import { getSearch } from "../../state/search";
import { useNavigate } from "react-router-dom";
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
    dispatch(getSearch(search)).then(() => navigate("/search"));
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
        <InputLabel htmlFor="component-filled" sx={{}}>
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
      <CustomButton>
        <PersonPin
          onClick={(e) => setOpenLogin(!openLogin)}
          sx={{ fontSize: 45, display: { xs: "none", md1: "flex" } }}
        />
        <AddBox
          onClick={(e) => setOpen(!open)}
          sx={{ fontSize: 40, display: { xs: "block", md1: "none" } }}
        />
      </CustomButton>
      {
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
              <SingUp />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      }
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
