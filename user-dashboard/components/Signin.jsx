// LoginForm.jsx
import React, { useState } from 'react';
import '../styles/login.css';

const LoginForm = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpButton, setShowOtpButton] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { username, password, phone, otp });
    // Add form submission logic here
  };

  const handlePhoneClick = () => {
    setShowOtpButton(true);
  };

  const handleGetOtp = () => {
    if (phone) {
      alert('OTP sent to ' + phone);
    } else {
      alert('Please enter a phone number first');
    }
  };

  return (
    <div className="form-container">
      <div className="container">
        <header>
          <h2>Sign in</h2>
          <h3>to your LearningLoom account</h3>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username-input" className="input-heading">Username</label>
            <div className="input-wrapper">
              <input
                id="username-input"
                type="username"
                name="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="password-input" className="input-heading">Password</label>
            <div className="input-wrapper">
              <input
                id="password-input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
          </div>
          
          <span className="horizontal-divider">OR</span>

          <div className="input-group">
            <label htmlFor="phone-input" className="input-heading">Phone No.</label>
            <div className="input-wrapper">
              <input
                id="phone-input"
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onClick={handlePhoneClick}
                placeholder="Enter your phone no."
              />
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="otp-input" className="input-heading">OTP</label>
            {showOtpButton ? (
              <div className="flex-row">
                <div className="otp-input-group">
                  <input
                    id="otp-input"
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                  />
                </div>
                <button type="button" className="get-otp-btn" onClick={handleGetOtp}>
                  Get OTP
                </button>
              </div>
            ) : (
              <div className="input-wrapper">
                <input
                  id="otp-input"
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                />
              </div>
            )}
          </div>
          
          <div className="submit">
            <button type="submit">
              <span>Sign in</span>
            </button>
          </div>
        </form>
        
        <footer className="loginfooter">
          <p>
            Don't have an account?
            <button type="button" className="link-button">
              <span>Sign up</span>
            </button>
          </p>
          <button type="button" className="link-button">
            <span>Forgot Password?</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default LoginForm;
