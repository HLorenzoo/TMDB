const User = require("../models/User");
const UserService = require("../service/user.service");

class UserController {
  static async createUser(req, res, next) {
    try {
      const user = await UserService.createUser(req.body);
      user && res.status(201).send(user);
      user || res.sendStatus(404);
    } catch (error) {
      next();
    }
  }

  static async findAllUsers(req, res, next) {
    try {
      const users = await UserService.getAllUser();
      res.status(200).send(users);
    } catch (error) {
      next();
    }
  }
  static async findOneUser(req, res, next) {
    try {
      const _id = req.params._id;
      const user = await UserService.getOneUser(_id);
      res.status(200).send(user);
    } catch (error) {
      next();
    }
  }
  static async deleteUser(req, res, next) {
    try {
      const _id = req.params._id;
      const user = await UserService.deleteUser(_id);
      res.status(204).send("User Deleted! D:");
    } catch (error) {
      next();
    }
  }
  static async editUser(req, res, next) {
    try {
      const _id = req.params._id;
      const { username, password } = req.body;
      const user = await UserService.editUser(_id, { username, password });
      res.status(200).send(user);
    } catch (error) {
      next();
    }
  }
  static async addFav(req, res, next) {
    try {
      const _id = req.params._id;
      const userUpdated = await UserService.addFav(_id, req.body.favorites);
      res.status(200).send(userUpdated);
    } catch (error) {
      next();
    }
  }
  static async deleteFav(req, res, next) {
    try {
      const _id = req.params._id;
      const userUpdated = await UserService.deleteFav(_id, req.body.favorites);
      res.status(200).send(userUpdated);
    } catch (error) {
      next();
    }
  }
}

module.exports = UserController;
