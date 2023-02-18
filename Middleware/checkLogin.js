const jwt = require('jsonwebtoken');

const checkLogin = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const { userName, userId } = decoded;
        req.userId = userId;
        req.userName = userName;

        next()
    } catch (error) {
        next("Authentication failed")
    }
}

module.exports = checkLogin;