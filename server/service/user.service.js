const User = require("../models/User");
const bcrypt = require("bcrypt");

class UserService {
  static async createUser(body) {
    try {
      let user = new User(body);
      return await user.save({ password: 0 });
    } catch (error) {
      console.error("error existente createUser:", error.message);
    }
  }

  static async getAllUser() {
    try {
      let users = await User.find(
        {
          userStatus: true,
        },
        { password: 0 }
      );
      return users;
    } catch (error) {
      console.error("error existente getAllUser:", error.message);
    }
  }

  static async getOneUser(_id) {
    try {
      let user = await User.find({ _id }).select({ password: 0 });
      return user;
    } catch (error) {
      console.error("error existente getOneUser:", error.message);
    }
  }
  static async deleteUser(_id) {
    try {
      let users = await User.findByIdAndUpdate(
        _id,
        {
          $set: { userStatus: false },
        },
        { new: true }
      );
      return users;
    } catch (error) {
      console.error("error existente deleteUser:", error.message);
    }
  }
  static async editUser(id, { password, username }) {
    try {
      return await User.findByIdAndUpdate(
        id,
        {
          $set: {
            password: password && bcrypt.hashSync(password, 8),
            username,
          },
        },
        { new: true }
      ).select({ password: 0 });
    } catch (error) {
      console.error({ error });
    }
  }
  static async addFav(_id, favorites) {
    try {
      const user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { favorites: favorites },
        },
        { new: true }
      );
      return user;
    } catch (error) {
      console.error({ error });
    }
  }
  static async deleteFav(_id, favorites) {
    try {
      const user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: {
            favorites: { id: favorites.id },
          },
        },
        { new: true }
      );
      return user;
    } catch (error) {
      console.error({ error });
    }
  }
}

module.exports = UserService;
