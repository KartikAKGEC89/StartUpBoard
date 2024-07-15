const tokenService = require("../Services/token-service");

module.exports = async function (req, res, next) {
    try {
        const { accesstoken } = req.cookies;
        if (!accesstoken) {
            throw new Error();
        }

        const userData = await tokenService.verifyAccesstoken(accesstoken);
        // console.log(userData)
        if (!userData) {
            throw new Error();
        }
        req.user = userData
        next();
    } catch (error) {
        res.status(401).send({"message": "Token not persent"})
    }

};