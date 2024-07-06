const jwt = require('jsonwebtoken');
const ACCESSTOKEN = process.env.ACCESS_TOKEN_SECRET;
const REFRESHTOKEN = process.env.REFRESH_TOKEN_SECRET;


class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, ACCESSTOKEN, {
            expiresIn: '10H'
        })
        const refreshToken = jwt.sign(payload, REFRESHTOKEN, {
            expiresIn: '1y'
        })

        return { accessToken, refreshToken };
    }
}

module.exports = new TokenService();