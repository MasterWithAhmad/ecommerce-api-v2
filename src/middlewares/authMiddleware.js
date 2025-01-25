/**
 * Title: Authentication Middleware
 * Author: Ahmed Ibrahim Ahmed
 * Date: 2025-01-24
 * Description: Middleware to verify JWT tokens and authenticate users for protected routes.
 */

const jwt = require('jsonwebtoken');

// Authenticate user
exports.authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

// Authorize based on roles
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        }
        next();
    };
};
