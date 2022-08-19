import React, { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Right from "../Right";
import Left from "../Left";
import { useDispatch, useSelector } from "react-redux";
import { sendMe } from "../state/login";
import Favorites from "./UserComponenets/Favorite";
import EditUser from "./UserComponenets/EditUser";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sendMe());
  }, []);
  const user = useSelector((state) => state.login);
  if (!user.username)
    return (
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    );
  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      <Left />
      <Box flex={1} p={6}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Favorites />
          <Box>
            <InsertEmoticonIcon
              paddingLeft={9}
              fontSize="large"
              sx={{ color: "#146e9a" }}
            />
            <Typography variant="h3">
              Bienvenido de nuevo :
              <Typography
                paddingLeft={10}
                variant="h2"
                sx={{ color: "#35a9e2", "&:hover": { color: "#146e9a" } }}
              >
                {user.username}
              </Typography>
            </Typography>
            <AccessibilityIcon fontSize="large" sx={{ color: "#146e9a" }} />
            {/*  <EditUser /* user={user} */}
          </Box>
        </Stack>
      </Box>
      <Right />
    </Stack>
  );
};

export default User;
