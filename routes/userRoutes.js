const express = require("express");
const { getUserController } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router()

//routes
// GET USER || GET
router.get("/getUser",authMiddleware,getUserController)

// UPDATE PROFILE


module.exports = router;