/**
 * Title: Authentication Controller
 * Author: Ahmed Ibrahim Ahmed
 * Date: 2025-01-24
 * Description: Handles authentication logic such as registration, login, and token generation.
 */

const { registerUser } = require("../services/userService");
const { generateToken } = require("../utils/tokenUtil");
const { handleError } = require("../utils/errorUtil");

// Register a new user
exports.register = async (req, res) => {
    try {
        const newUser = await registerUser(req.body);
        const token = generateToken(newUser._id);

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                email: newUser.email,
                name: newUser.name,
            },
            token,
        });
    } catch (error) {
        handleError(res, error, 400);
    }
};
