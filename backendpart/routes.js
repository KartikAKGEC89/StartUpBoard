const router = require('express').Router();
const authController = require('./Controller/auth-controller');

router.post('/api/send-otp', authController.sendOtp)

module.exports = router;