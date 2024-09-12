import React from 'react';
import Footer from "../../../../components/Footer/Footer"; // Corrected path
import NavBar from "../../../../components/NavBar/NavBar"; // Corrected path
import './PersonalDetStyles.css';

// Import the profile image
import profileImage from '../../../../assets/Pictures/girl-profile.jpg';

const PersonalDetails = () => {
  return (
    <div className="personal-details-page">
      <NavBar />
      <div className="profile-header">
        <h2>Profile Information</h2>
      </div>
      <div className="personal-details-container">
        <div className="personal-details-sidebar">
          <div className="profile-image">
            {/* Use the imported profile image */}
            <img src={profileImage} alt="Profile" />
            <button className="update-btn">Update</button>
          </div>
          <div className="profile-info">
            <p><strong>Lisa Susan</strong></p>
            <p>Sri Lanka</p>
            <p>Contact No: +94 685 254 238</p>
            <p>NIC No: 2000568924158</p>
            <p>Email: lisaSus@gmail.com</p>
          </div>
        </div>

        <div className="personal-details-form">
          <div className="form-tabs">
            <button className="tab active">Personal Details</button>
            <button className="tab">Security</button>
          </div>
          <form>
            <div className="form-group">
              <input type="text" name="firstName" placeholder="First Name" />
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <select name="gender">
                <option value="">Select Your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input type="date" name="dob" placeholder="Date of Birth" />
            </div>
            <div className="form-group">
              <input type="text" name="nic" placeholder="Enter NIC Number" />
              <input type="text" name="contactNumber" placeholder="Enter Contact Number" />
            </div>
            <div className="form-group">
              <select name="city">
                <option value="">Select Your City</option>
                {/* Add city options */}
              </select>
              <select name="country">
                <option value="">Select Your Country</option>
                {/* Add country options */}
              </select>
            </div>
            <input type="text" name="permanentAddress" placeholder="Enter Your Permanent Address" />
            <div className="form-actions">
              <button type="submit" className="save-btn">Save</button>
              <button type="button" className="delete-btn">Delete</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalDetails;
