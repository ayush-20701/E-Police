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
  