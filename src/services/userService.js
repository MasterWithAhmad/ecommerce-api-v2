/**
 * Title: User Service
 * Author: Ahmed Ibrahim Ahmed
 * Date: 2025-01-24
 * Description: Contains business logic for user operations like registration, login, and profile management.
 */

const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.registerUser = async (userData) => {
    const { email, password, name } = userData;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await User.create({ email, password: hashedPassword, name });
    return newUser;
};
