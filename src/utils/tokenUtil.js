/**
 * Title: Token Utility
 * Author: Ahmed Ibrahim Ahmed
 * Date: 2025-01-24
 * Description: Utility functions for generating and managing JWT tokens.
 */

const jwt = require("jsonwebtoken");

exports.generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};