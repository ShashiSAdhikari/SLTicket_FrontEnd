import React, { useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import './verifyEmailStyles.css';

const VerifyEmail = () => {
  const [otp, setOtp] = useState('');

  return (
    <div className="verify-email-page">
      <NavBar />
      <div className="verify-email-container">
        <div className="verify-email-image">
          {/* Add the image component here */}
          <img src="path-to-verification-image" alt="Verify Email Illustration" />
        </div>
        <div className="verify-email-message">
          <h2>Verify your Phone Number</h2>
          <p>
            We have sent a verification Phone to +94*********
          </p>
          <p>
            Didn't receive the OTP Code? Please Check Your Phone 
          </p>
          <input
            type="text"
            placeholder="Enter OTP code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="otp-input"
            maxLength="6" // Limit to 6 characters for OTP
          />
          <button className="resend-email-button">Resend OTP Code</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyEmail;
