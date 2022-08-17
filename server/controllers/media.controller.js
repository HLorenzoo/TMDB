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
  //refactor movies
  static async popularMovie(req, res, next) {
    try {
      const home = await MediaService.popularMovie();
      res.send(home);
    } catch (error) {
      console.error(error);
    }
  }
  static async topratedMovie(req, res, next) {
    try {
      const home = await MediaService.topratedMovie();
      res.send(home);
    } catch (error) {
      console.error(error);
    }
  }
  static async upcomingMovie(req, res, next) {
    try {
      const home = await MediaService.upcomingMovie();
      res.send(home);
    } catch (error) {
      console.error(error);
    }
  }
  //series
  static async popularSeries(req, res, next) {
    try {
      const home = await MediaService.popularSeries();
      res.send(home);
    } catch (error) {
      console.error(error);
    }
  }
  static async topratedSeries(req, res, next) {
    try {
      const home = await MediaService.topratedSeries();
      res.send(home);
    } catch (error) {
      console.error(error);
    }
  }
  static async searchMovie(req, res, next) {
    try {
      const home = await MediaService.searchMovie(req.params.name);
      res.send(home);
    } catch (error) {
      console.error(error);
    }
  }
  static async searchSerie(req, res, next) {
    try {
      const home = await MediaService.searchSerie(req.params.name);
      res.send(home);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = MediaController;
