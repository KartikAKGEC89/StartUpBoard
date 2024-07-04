const crypto = require('crypto')

class OtpService {
    async generateotp() {
        const otp = crypto.randomInt(1000, 9999);

        return otp;
    }
    
    sendotpsms() {
        
    }

    verifyotp() {
        
    }
}

module.exports = new OtpService();