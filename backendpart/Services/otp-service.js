const crypto = require('crypto');
const hashService = require('./hash-service');

const smssid = process.env.SMS_SID;
const smsauth = process.env.SMS_AUTH;

const twilio = require('twilio')(smssid, smsauth, {
    lazyLoading: true
});
class OtpService {
    async generateotp() {
        const otp = crypto.randomInt(1000, 9999);

        return otp;
    }
    
    async sendotpsms(phone,otp) {
        return await twilio.messages.create({
            to: phone,
            from: process.env.SMS_FROM_NUMBER,
            body: `Your verification code for STARTUPBOARD is ${otp}`
        });
    }

    verifyotp(hashedOtp, data) {
        const computedHashed = hashService.hashedOtp(data);

        return computedHashed === hashedOtp;
    }
}

module.exports = new OtpService();