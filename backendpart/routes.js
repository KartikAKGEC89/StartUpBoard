const router = require('express').Router();
const AuthController = require('./Controller/auth-controller');

router.post('/api/send-otp', (req, res) => {
    res.send('Hello from OTP');
})

module.exports = router;