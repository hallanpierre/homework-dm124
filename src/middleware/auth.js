const auth = (request, response, next) => {
    const token = request.headers.authorization;

    if (/ZG0xMjQ6YWx1bm9pbmF0ZWw=/.test(token)) {
        next();
    } else {
        const errorInfo = {
            status: 401,
            message: 'Not authorized'
        };
        response
            .status(401)
            .json(errorInfo);
    }
};

module.exports = auth;