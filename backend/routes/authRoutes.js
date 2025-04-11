const express = require('express');
const router = express.Router();
const { verifyOtp } = require('../controllers/authController');

router.post('/verify-otp', verifyOtp);

module.exports = router;
