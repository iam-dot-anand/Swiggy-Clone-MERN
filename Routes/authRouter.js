const express = require("express");
const router = express.Router();
const {
  signUp,
  login,
  deleteUser,
  allUsers,
} = require("../Controllers/AuthController");
const {
  signUpValidation,
  loginValidation,
} = require("../Middlewares/AuthValidation");
const authMiddleware = require("../Middlewares/Auth");

// Routes
router.post("/login", loginValidation, login);
router.post("/signUp", signUpValidation, signUp);
router.get("/getUser", allUsers);
router.delete("/userDelete", deleteUser);

module.exports = router;
