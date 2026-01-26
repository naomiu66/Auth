const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router
  .post("/register", authController.register)
  .post("/login", authController.login)
  .post("/logout", authController.logout)
  .get("/profile", authController.getProfile);

module.exports = router;
