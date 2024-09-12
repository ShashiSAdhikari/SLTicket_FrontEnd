import React from 'react';
import { Link } from 'react-router-dom';
import './PasswordResetSuccessStyles.css';

function PasswordResetSuccess() {
  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src="/path-to-your-success-illustration.png" alt="Password Reset Success Illustration" />
      </div>
      <div className="auth-form">
        <div className="success-icon">✓</div>
        <h1>Password reset successfully</h1>
        <Link to="/login" className="primary-button">
          Home
        </Link>
      </div>
    </div>
  );
}

export default PasswordResetSuccess;