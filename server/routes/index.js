const express = require("express");
const router = express.Router();
const user = require("./user");
const media = require("./media");
const auth = require("./auth");
router.use("/users", user);
router.use("/auth", auth);
router.use("/media", media);

module.exports = router;
