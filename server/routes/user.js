const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

//GET
router.get("/", UserController.findAllUsers);
router.get("/:_id", UserController.findOneUser);

//POST
router.post("/", UserController.createUser);
router.post("/addFav/:_id", UserController.addFav);
router.put('/:id/favorites', UserController.setFavorite)
//DELETE
router.delete("/:_id", UserController.deleteUser);
router.put("/deleteFav/:_id", UserController.deleteFav);

//PUT
router.put("/:_id", UserController.editUser);

module.exports = router;
