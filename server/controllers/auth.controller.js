const axios = require("axios");
const User = require("../models/User");
const AuthServices = require("../service/auth.service");
const UserService = require("../service/user.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();

class AuthController {
  static async register(req, res, next) {
    try {
      const user = await UserService.createUser(req.body);
      if (user) {
        const token = jwt.sign(
          {
            username: user.username,
            email: user.email,
            id: user._id,
            favorites: user.favorites,
          },
          process.env.SECRET,
          { expiresIn: "5d" }
        );

        const payload = jwt.verify(token, process.env.SECRET);
        req.user = payload;
        res.cookie("token", token, { maxAge: 999999 });
        res.status(201).send(req.user);
      }
      user || res.sendStatus(404);
    } catch (error) {
      console.log(error);
      next();
    }
  }
  static async signIn(req, res) {
    const user = await User.findOne({ email: req.body.email });
    /*     user || res.sendStatus(401); */
    if (!user) return res.sendStatus(401);
    const { username, email, password, salt } = user;
    const passwordHash = bcrypt.hashSync(req.body.password, salt);
    if (passwordHash !== password) return res.sendStatus(401);
    if (passwordHash === password) {
      const token = jwt.sign({ username, email }, process.env.SECRET, {
        expiresIn: "5d",
      });
      const payload = jwt.verify(token, process.env.SECRET);
      req.user = payload;
      res.cookie("token", token, { maxAge: 999999 });
      res.status(201).send(req.user);
    }
  }
  static async logOut(req, res) {
    res.clearCookie("token");
    res.sendStatus(204);
  }
}

module.exports = AuthController;