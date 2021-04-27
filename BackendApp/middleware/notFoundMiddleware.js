const createError = require('http-errors');

const notFound = (req, res, next) => {
    const error = createError(404);
    next(error);
};

module.exports = notFound;