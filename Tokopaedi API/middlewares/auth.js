/*
    PRIVATE API / WITH AUTH ==> API yang butuh private key / token untuk bisa diaccess
*/
var jwt = require('jsonwebtoken');

function auth(req, res, next) {
    // middleware buat rest api
    // butuh token/private key
    // if (req.headers.token === process.env.SECRET_KEY) {
    //     next();
    // } else {
    //     res.sendStatus(401);
    // }


    // auth with jwt
    try {
        jwt.verify(req.headers.token, process.env.SECRET_KEY);
        next();
    } catch (error) {
        res.sendStatus(401);
    }
}

module.exports = auth;