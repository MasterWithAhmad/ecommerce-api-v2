/**
 * Title: Database Configuration
 * Author: Ahmed Ibrahim Ahmed
 * Date: 2025-01-24
 * Description: Contains logic for connecting to MongoDB and environment variable setup.
 */

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;