import React, { useState } from "react";
import girlProfile from '../../../../assets/Pictures/girl-profile.jpg'; // Import the image
import Footer from "../../../../components/Footer/Footer";
import NavBar from "../../../../components/NavBar/NavBar";
import './Security.css'; // CSS file for the security page


const Security = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Add validation and password update logic here
    if (newPassword === confirmPassword) {
      console.log("Passwords match, proceed with update.");
    } else {
      console.log("Passwords do not match!");
    }
  };

  return (
    <div className="security-page">
      <NavBar />
      <div className="security-container">
        <div className="profile-info">
          <div className="profile-image">
            {/* Updated User Image */}
            <img src={girlProfile} alt="Profile" />
          </div>
          <div className="profile-details">
            <h3>Lisa Susan</h3>
            <p>Sri Lanka</p>
            <p>Contact No: +94 685 254 238</p>
            <p>NIC No: 2000568924158</p>
            <p>Email Address: lisaSus@gmail.com</p>
            <button className="update-btn">Update</button>
          </div>
        </div>

        <div className="security-form">
          <h2>Profile Information</h2>
          <div className="tab-navigation">
            <button className="tab active">Personal Details</button>
            <button className="tab">Security</button>
          </div>

          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="oldPassword">Enter Old Password</label>
              <div className="password-input">
                <input 
                  type={showOldPassword ? "text" : "password"} 
                  id="oldPassword" 
                  value={oldPassword} 
                  onChange={(e) => setOldPassword(e.target.value)} 
                  placeholder="Enter Old Password" 
                />
                {/* <span className="toggle-password" onClick={toggleShowOldPassword}>
                  {showOldPassword ? "🙈" : "👁️"}
                </span> */}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="newPassword">Enter New Password</label>
              <div className="password-input">
                <input 
                  type={showNewPassword ? "text" : "password"} 
                  id="newPassword" 
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)} 
                  placeholder="Enter New Password" 
                />
                {/* <span className="toggle-password" onClick={toggleShowNewPassword}> */}
                  {/* {showNewPassword ? "🙈" : "👁️"} */}
                {/* </span> */}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Enter Confirm Password</label>
              <div className="password-input">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  id="confirmPassword" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  placeholder="Enter Confirm Password" 
                />
                {/* <span className="toggle-password" onClick={toggleShowConfirmPassword}>
                  {showConfirmPassword ? "🙈" : "👁️"}
                </span> */}
              </div>
            </div>

            <button type="submit" className="update-btn">Update</button>
          </form>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Security;
