// models/FIR.js
const mongoose = require('mongoose');

const firSchema = new mongoose.Schema({
  name: String,
  aadhaarNumber: {
    type: mongoose.Schema.Types.ObjectId,
    default: ()=> new Mongoose.Types.ObjectId()
  },
  complaintType: String,
  location: String,
  time: Date,
  description: String,
  evidenceFiles: [String], // File paths or URLs
  status: {
    type: String,
    default: 'Under Review',
    enum: ['Under Review', 'Assigned to SHO', 'Scheduled for Verification', 'Closed']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FIR', firSchema);