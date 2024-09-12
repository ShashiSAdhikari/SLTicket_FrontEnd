// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ResetPasswordStyles.css';

// function ResetPassword() {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleReset = (e) => {
//     e.preventDefault();
//     // Handle password reset logic here
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-image">
//         <img src="/path-to-your-reset-password-illustration.png" alt="Reset Password Illustration" />
//       </div>
//       <div className="auth-form">
//         <h1>Reset Password</h1>
//         <p>Choose a new password for your account</p>
//         <form onSubmit={handleReset}>
//           <input
//             type="password"
//             placeholder="Your new password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="auth-input"
//           />
//           <input
//             type="password"
//             placeholder="Confirm your new password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="auth-input"
//           />
//           <button type="submit" className="primary-button">
//             Reset Password
//           </button>
//         </form>
//         <Link to="/login" className="secondary-button">
//           Back to Login
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default ResetPassword;