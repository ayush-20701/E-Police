const createFIR = async (req, res) => {
    try {
      const { complaintType, location, time, description } = req.body;
      const { uid, phone_number } = req.user;
      const evidenceFiles = req.files.map(file => file.path);
  
      const newFIR = new FIR({
        name: phone_number, // or allow optional name input
        aadhaarNumber: uid, // use UID as internal ID
        complaintType,
        location,
        time,
        description,
        evidenceFiles
      });
  
      await newFIR.save();
      res.status(201).json({ message: 'FIR submitted successfully', fir: newFIR });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting FIR' });
    }
  };
  const FIR = require('../models/FIR'); // Import the FIR model

const getUserFIRs = async (req, res) => {
    try {
        const { uid } = req.user; // Extract the UID from the authenticated user
        const userFIRs = await FIR.find({ aadhaarNumber: uid }); // Find FIRs by UID
        res.status(200).json(userFIRs); // Return the FIRs as a JSON response
    } catch (error) {
        console.error("Error fetching FIRs:", error);
        res.status(500).json({ message: 'Error fetching FIRs' });
    }
};
  module.exports = { createFIR, getUserFIRs };