/**
 * Title: Token Utility
 * Author: Ahmed Ibrahim Ahmed
 * Date: 2025-01-24
 * Description: Handles JWT generation for authentication and authorization.
 */

const jwt = require("jsonwebtoken");

exports.generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};