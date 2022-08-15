const User = require("../models/User");
const axios = require("axios");
const { modelName } = require("../models/User");
require("dotenv").config();

class MediaService {
  static async getMoviesHome() {
    try {
      //movies
      const [toprated, popular, upcoming] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`
        ),
      ]);
      return [
        toprated.data.results,
        popular.data.results,
        upcoming.data.results,
      ];
    } catch (error) {
      console.error(error);
    }
  }
  static async getSeriesHome() {
    try {
      //https://api.themoviedb.org/3/tv/popular?api_key=cf7662d405b231918672c758f8b2a04f
      const [toprated, popular] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=3`
        ),
        axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=3`
        ),
      ]);
      return [toprated.data.results, popular.data.results];
    } catch (error) {
      console.error(error);
    }
  }
  static async searchAll(name) {
    try {
      //https://api.themoviedb.org/3/search/multi?api_key=cf7662d405b231918672c758f8b2a04f&query=naruto
      const search = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${name}`
      );
      return search.data;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = MediaService;
