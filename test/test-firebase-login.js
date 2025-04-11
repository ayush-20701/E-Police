const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyCMTNSm4HCege3p-laZmmTojnmRH1FPS7s",        // ✅ Required
  projectId: "epolice-40806",      // ✅ Required
};

firebase.initializeApp(firebaseConfig);

async function loginWithTestPhone() {
  try {
    const phoneNumber = '+15555550100'; // Firebase test number
    const testOTP = '123444';           // Firebase test OTP

    const appVerifier = {
      type: 'recaptcha',
      verify: () => Promise.resolve('fake-recaptcha-token'), // 🔧 Mocked
    };

    const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier);
    const userCredential = await confirmationResult.confirm(testOTP);
    const idToken = await userCredential.user.getIdToken();

    console.log('✅ Firebase ID Token:', idToken);
  } catch (error) {
    console.error('❌ Login failed:', error.message);
  }
}

loginWithTestPhone();
