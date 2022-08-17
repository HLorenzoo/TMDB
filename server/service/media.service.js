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
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${
            process.env.API_KEY
          }&language=en-US&page=${Math.floor(Math.random() * 6 + 1)}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
            process.env.API_KEY
          }&language=en-US&page=${Math.floor(Math.random() * 6 + 1)}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${
            process.env.API_KEY
          }&language=en-US&page=${Math.floor(Math.random() * 6 + 1)}`
        ),
      ]);
      return [toprated.data.results, popular.data.results, upcoming.data.results];
    } catch (error) {
      console.error(error);
    }
  }
  static async getSeriesHome() {
    try {
      //https://api.themoviedb.org/3/tv/popular?api_key=cf7662d405b231918672c758f8b2a04f
      const [popular, toprated] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${
            process.env.API_KEY
          }&language=en-US&page=${Math.floor(Math.random() * 6 + 1)}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=${
            process.env.API_KEY
          }&language=en-US&page=${Math.floor(Math.random() * 6 + 1)}`
        ),
      ]);
      return [popular.data, toprated.data];
    } catch (error) {
      console.error(error);
    }
  }
  //REFACTORIZACION BACKEND PARA PODER TRABAJAR CON MOVIES
  static async popularMovie() {
    try {
      const popular = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          process.env.API_KEY
        }&language=en-US&page=${Math.floor(Math.random() * 6 + 1)}`
      );
      return popular.data.results;
    } catch (error) {
      console.error(error);
    }
  }
  static async topratedMovie() {
    try {
      const toprated = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          process.env.API_KEY
        }&language=en-US&page=${Math.floor(Math.random() * 6 + 1)}`
      );
      return toprated.data.results;
    } catch (error) {
      console.error(error);
    }
  }
  static async upcomingMovie() {
    try {
      const upcoming = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${
          process.env.API_KEY
        }&language=en-US&page=${Math.floor(Math.random() * 6 + 1)}`
      );
      return upcoming.data.results;
    } catch (error) {
      console.error(error);
    }
  }
  //Series
  static async popularSeries() {
    try {
      const popular = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${
          process.env.API_KEY
        }&language=en-US&page=${Math.floor(Math.random() * 6 + 1)}`
      );
      return popular.data.results;
    } catch (error) {
      console.error(error);
    }
  }
  static async topratedSeries() {
    try {
      const toprated = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${
          process.env.API_KEY
        }&language=en-US&page=${Math.floor(Math.random() * 6 + 1)}`
      );
      return toprated.data.results;
    } catch (error) {
      console.error(error);
    }
  }

  static async searchMovie(name) {
    try {
      //https://api.themoviedb.org/3/search/movie?api_key=cf7662d405b231918672c758f8b2a04f&query=naruto
      const search = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${name}`
      );
      return search.data;
    } catch (error) {
      console.error(error);
    }
  }
  static async searchSerie(name) {
    try {
      //https://api.themoviedb.org/3/search/movie?api_key=cf7662d405b231918672c758f8b2a04f&query=naruto
      const search = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${process.env.API_KEY}&query=${name}`
      );
      return search.data;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = MediaService;
