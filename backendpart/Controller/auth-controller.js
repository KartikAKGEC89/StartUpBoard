const otpService = require("../Services/otp-service");
const hashService = require('../Services/hash-service');

class AuthController {
    async sendOtp(req, res) {
        const { phone } = req.body;

        if (!phone) {
            res.status(400).send("Use correct data");
        }

        const otp = await otpService.generateotp();

        const valid = 1000 * 60 * 2;
        const expires = Date.now() + valid;
        const data = `${phone}.${otp}.${expires}`

        const hash = hashService.hashedOtp(data);

        res.json({"otp":hash});
    }
}
module.exports = new AuthController();