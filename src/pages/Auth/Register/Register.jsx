import React from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import './registerStyles.css';

const Register = () => {
  return (
    <div className="register-page">
      <NavBar />
      <div className="register-container">
        <div className="register-image">
          {/* Add the image component here */}
          <img src="path-to-image" alt="Register Illustration" />
        </div>
        <div className="register-form">
          <h2>Create account</h2>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
          <form>
            <div className="form-group">
              <input type="text" name="firstName" placeholder="First Name" />
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <div className="phone-number">
              {/* Add country code dropdown and phone number input */}
            </div>
            <div className="terms">
              <input type="checkbox" />
              <span>
                I agree to SLTicket <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
              </span>
            </div>
            <button type="submit">Create Account</button>
          </form>
          <div className="social-login">
            <button className="google-login">Continue with Google</button>
            <button className="apple-login">Continue with Apple</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
