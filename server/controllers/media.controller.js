const User = require("../models/User");
const MediaService = require("../service/media.service");

class MediaController {
  static async getMovies(req, res, next) {
    try {
      const home = await MediaService.getMoviesHome();
      res.send(home);
    } catch (error) {
      console.error(error);
    }
  }
  static async getSeries(req, res, next) {
    try {
      const home = await MediaService.getSeriesHome();
      res.send(home);
    } catch (error) {
      console.error(error);
    }
  }
  static async searchAll(req, res, next) {
    try {
      const home = await MediaService.searchAll(req.params.name);
      res.send(home);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = MediaController;
