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

    // Hash the password and create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword, name });

    return newUser;
};

exports.loginUser = async (email, password) => {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }

    // Compare hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error("Invalid credentials");
    }

    // Return user object
    return user;
};