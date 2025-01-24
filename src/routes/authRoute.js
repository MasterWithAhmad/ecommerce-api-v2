/**
 * Title: Authentication Routes
 * Author: Ahmed Ibrahim Ahmed
 * Date: 2025-01-24
 * Description: Contains routes for user authentication, including registration and login.
 */

const express = require("express");
const { register } = require("../controllers/authController");

const router = express.Router();

// Register route
router.post("/register", register);

module.exports = router;
