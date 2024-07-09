const jwt = require('jsonwebtoken');
const ACCESSTOKEN = process.env.ACCESS_TOKEN_SECRET;
const REFRESHTOKEN = process.env.REFRESH_TOKEN_SECRET;
const refreshModel = require('../models/refresh-model');

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

    async storeRefreshToken( token, userId ) {
        try {
            await refreshModel.create({
                token,
                userId
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = new TokenService();