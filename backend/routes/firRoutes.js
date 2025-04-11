const express = require('express');
const router = express.Router();
const { createFIR, getUserFIRs } = require('../controllers/firController');
const multer = require('multer');

// Upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Routes
router.post('/submit', upload.array('evidenceFiles'), createFIR);
router.get('/:aadhaarNumber', getUserFIRs); // mock identity lookup

module.exports = router;