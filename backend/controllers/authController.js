const admin = require('../firebase/firebaseConfig');

exports.verifyOtp = async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    // You can also use decodedToken.phone_number
    res.status(200).json({ message: 'OTP Verified', uid });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token', details: error.message });
  }
};
