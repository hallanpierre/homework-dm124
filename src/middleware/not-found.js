const notFound = (request, response, next) => {
    const errorInfo = {
        status: 404,
        message: `Route to ${request.method} ${request.path}`
    };
    response
        .status(404)
        .json(errorInfo);

    next && next();
};

module.exports = notFound;