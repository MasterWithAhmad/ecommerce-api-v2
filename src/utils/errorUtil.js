/**
 * Title: Error Utility
 * Author: Ahmed Ibrahim Ahmed
 * Date: 2025-01-24
 * Description: Provides reusable functions for handling errors in the application.
 */

exports.handleError = (res, error, statusCode = 500) => {
    res.status(statusCode).json({ message: error.message || "Internal Server Error" });
};