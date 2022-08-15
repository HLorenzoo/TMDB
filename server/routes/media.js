const express = require("express");
const router = express.Router();
const MediaController = require("../controllers/media.controller");

router.get("/movies", MediaController.getMovies);
router.get("/serie", MediaController.getSeries);
router.get("/search/:name", MediaController.searchAll);
module.exports = router;
