import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';
import Footer from '../../../components/Footer/Footer';
import forgot from '../../../assets/icons/forgot.svg'; // Corrected path
import './forgotStyles.css';

function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
  };

  return (
    <>
      <NavBar />
      <div className="auth-container">
        <div className="auth-image">
          <img src={forgot} alt="Forgot Password Illustration" />
        </div>
        <div className="auth-form">
          <h1>Forgot Password</h1>
          <p>
            Enter the phone number you used to create your account so we can send you
            instructions on how to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <button type="submit" className="primary-button">
              Send
            </button>
          </form>
          <Link to="/login" className="secondary-button">
            Back to Login
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;
