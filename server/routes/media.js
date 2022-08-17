const express = require("express");
const router = express.Router();
const MediaController = require("../controllers/media.controller");

router.get("/movies", MediaController.getMovies);
router.get("/serie", MediaController.getSeries);

//busquedas
router.get("/searchM/:name", MediaController.searchSerie);
router.get("/searchS/:name", MediaController.searchMovie);
//movies
router.get("/movies/popular", MediaController.popularMovie);
router.get("/movies/toprated", MediaController.topratedMovie);
router.get("/movies/upcoming", MediaController.upcomingMovie);

//serie
router.get("/serie/popular", MediaController.popularSeries);
router.get("/serie/toprated", MediaController.topratedSeries);
module.exports = router;
