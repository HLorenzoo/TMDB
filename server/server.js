const express = require("express");
const app = express();
const volleyball = require("volleyball");
const mongoose = require("mongoose");
const routes = require("./routes");
const User = require("./models/User");
const client = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

app.use(express.json());
app.use(volleyball);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.use(cors());


/* .then(() => { */
app.listen(process.env.PORT, () => {
  console.log("Api working..");
  /*   }); */
});
