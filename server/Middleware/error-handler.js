module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    switch (true) {
        case typeof err === 'string':
            // custom application error
            const is404 = err.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({ errors: [{message: err }], status: "error" }); //me
            // return res.status(statusCode).json({ message: "sorry please" });
        case err.name === 'UnauthorizedError':
            // jwt authentication error
            return res.status(401).json({ message: 'Unauthorized', status: "error" });
        case err.status === 404:
            // Route not found error
            return res.status(404).json({ message: 'page not found', status: "error" });
        default:
            return res.status(500).json({ errors: [{message: err.message }], status: "error" });
    }
}