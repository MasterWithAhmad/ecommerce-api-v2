/**
 * Title: Main Server File
 * Author: Ahmed Ibrahim Ahmed
 * Date: 2025-01-24
 * Description: Entry point of the application. Sets up middleware, routes, and connects to the database.
 */

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoute");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

