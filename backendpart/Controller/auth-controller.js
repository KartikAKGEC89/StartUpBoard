const otpService = require("../Services/otp-service");

class AuthController {
    async sendOtp(req, res) {
        const { phone } = req.body;

        if (!phone) {
            res.status(400).send("Use correct data");
        }

        const otp = await otpService.generateotp();
        res.json({"otp":otp});
    }
}
module.exports = new AuthController();