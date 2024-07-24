const otpService = require("../Services/otp-service");
const hashService = require('../Services/hash-service');
const userService = require('../Services/user-service');
const tokenService = require('../Services/token-service');
const UserDto = require("../dtos/user-dto");

class AuthController {
    async sendOtp(req, res) {
        const { phone } = req.body;

        if (!phone) {
            return res.status(400).send("Use correct data");
        }

        const otp = await otpService.generateotp();

        const valid = 1000 * 60 * 2;
        const expires = Date.now() + valid;
        const data = `${phone}.${otp}.${expires}`;

        const hash = hashService.hashedOtp(data);

        try {
            // await otpService.sendotpsms(phone, otp);
            return res.json({
                hash: `${hash}.${expires}`,
                phone,
                otp
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Message sending fail" });
        }

        return res.json({"otp":otp});
    }
    async verifyOtp(req,res) {
        const { otp, hash, phone } = req.body;

        if (!otp || !hash || !phone) {
            return res.status(400).send("User made error");
        }

        const [hashedOtp, expires] = hash.split('.');

        if (Date.now() > +expires) {
            return res.status(404).send('Otp Expires');
        }

        const data = `${phone}.${otp}.${expires}`

        const isValid = otpService.verifyotp(hashedOtp, data);

        if (!isValid) {
            return res.status(404).send("Otp is not valid");
        }

        let user;

        try {
            user = await userService.findUser({ phone: phone });

            if (!user) {
                user = await userService.createUser({ phone: phone });
            }

        } catch (error) {
            return res.status(500).send(error);
        }

        const { accessToken, refreshToken } = tokenService.generateTokens({
            _id: user._id,
            activated: false,
        });

        await tokenService.storeRefreshToken(refreshToken, user._id);

        res.cookie('refreshtoken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true
        });

        res.cookie('accesstoken', accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true
        });

        const userDto = new UserDto(user);
        res.json({ user: userDto, auth:true });
    }

    async refresh(req, res) {
        const { refreshtoken: refreshTokenFromCookie } = req.cookies;
        
        let userData;
        try {
            userData = await tokenService.verifyRefreshtoken(
                refreshTokenFromCookie
            );
        } catch (error) {
            return res.status(401).json({ message: "Error refresh token" });
        }

        try {
            const token = await tokenService.findRefreshToken(userData._id, refreshTokenFromCookie);
            if (!token) {
                return res.status(401).json({ message: "Invalid Token" });
            }
        } catch (error) {
           return res.status(500).json({ message: "Internal Error" });
        }


        const user = await userService.findUser({ _id: userData._id });
        if (!user) {
            return res.status(404).json({ message: "No user" });
        }

        const { refreshToken, accessToken } = tokenService.generateTokens({
            _id: userData._id,
        });
        
        try {
            await tokenService.updateRefreshToken(userData._id, refreshToken)
        } catch (error) {
            res.status(500).json({message:"Internal Server"})
        }
        res.cookie('refreshtoken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true
        });

        res.cookie('accesstoken', accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true
        });

        const userDto = new UserDto(user);
        res.json({ user: userDto, auth: true });
        
    }
}
module.exports = new AuthController(); 