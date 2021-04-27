const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new Error('You are not logged in. Please log in to get access', 401));
    }

    const decoded = await jwt.verify(token, '123abc');

    const curruentUser = await User.findById(decoded.id);
    req.user = curruentUser;
    next();
});

module.exports = protect;