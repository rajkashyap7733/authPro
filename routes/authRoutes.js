const express = require("express");
const { registerController, loginController } = require("../controllers/authController");

const router = express.Router()

//routes
//register
router.post("/register",registerController);

//login
router.post("/login",loginController)
module.exports = router;