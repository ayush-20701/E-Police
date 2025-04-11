// routes/firRoutes.js
const express = require('express');
const router = express.Router();
const { createFIR, getUserFIRs } = require('../controllers/firController');
const verifyFirebaseToken = require('../middleware/verifyFirebaseToken');
const multer = require('multer');

// Upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// 🔐 Protected Routes
router.post('/submit', verifyFirebaseToken, upload.array('evidenceFiles'), createFIR);
router.get('/mine', verifyFirebaseToken, getUserFIRs);

module.exports = router;
