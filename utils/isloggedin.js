const {expressjwt} = require('express-jwt');

exports.isloggedin = expressjwt({
    gettoken: (req, res) => req.cookies.token,
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256']
})