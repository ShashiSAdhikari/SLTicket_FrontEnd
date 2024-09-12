import React from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import './loginStyles.css';

function Login() {
  return (
    <div className="page-container">
      <NavBar />
      <div className="login-container">
        <div className="login-image">
          <img src="/images/login-illustration.svg" alt="Login illustration" className="illustration" />
        </div>
        <div className="login-form">
          <h1>Welcome Back</h1>
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          <form>
            <input type="tel" placeholder="Phone Number" />
            <input type="password" placeholder="Password" />
            <a href="/forgot-password" className="forgot-password">Forgot Password</a>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="divider">
            <span>or</span>
          </div>
          <button className="google-button">
            <img src="/images/google-icon.svg" alt="Google" />
            Continue with Google
          </button>
          <button className="apple-button">
            <img src="/images/apple-icon.svg" alt="Apple" />
            Continue with Apple
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;