import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';
import Footer from '../../../components/Footer/Footer';
import otpImage from '../../../assets/Icons/otp.svg'; // renamed import for clarity
import './CheckEmailStyles.css';

function CheckEmail() {
  const [otp, setOtp] = useState('');

  const handleResend = () => {
    // Handle resend logic here
  };

  return (
    <>
      <NavBar />
      <div className="check-email-container">
        <div className="check-email-image">
          <img src={otpImage} alt="Check Email Illustration" />
        </div>
        <div className="check-email-form">
          <h1>Check your Email</h1>
          <p>We have sent a message with password reset information to +94 7* *** *97.</p>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="otp-input"
          />
          <p className="didnt-receive">Didn't receive the message?</p>
          <button onClick={handleResend} className="resend-message">
            Resend Message
          </button>
          <Link to="/login" className="back-to-login">
            Back to Login
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckEmail;
