import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import Content from "../Components/Content/Content";
import Right from "../Right";
import Left from "../Left";

const Home = () => {
;
  return (
    <Stack direction="row" spacing={2} justifyContent="space-around">
      <Left />
      <Content />
      <Right />
    </Stack>
  );
};

export default Home;
