const auth = (request, response, next) => {
    const token = request.headers.authorization;

    const HttpStatusNotAuthorized = 401;

    if (/ZG0xMjQ6YWx1bm9pbmF0ZWw=/.test(token)) {
        next();
    } else {
        const errorInfo = {
            status: HttpStatusNotAuthorized,
            message: 'Not authorized'
        };
        response
            .status(HttpStatusNotAuthorized)
            .json(errorInfo);
    }
};

module.exports = auth;