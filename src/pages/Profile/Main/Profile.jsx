import React, { useState } from "react";
import "./profileStyles.css"; // Import the CSS file for additional custom styles
import NavBar from "../../../components/NavBar/NavBar"; // Import the NavBar component
import Footer from "../../../components/Footer/Footer"; // Import the Footer component
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import ProfileSecurity from "../ProfileSecurity/ProfileSecurity";
import { useTranslation } from "react-i18next"; // Import the hook to use translation

const Profile = () => {
  // Use state to manage the active tab
  const [activeTab, setActiveTab] = useState("personal"); // Default to "personal"
  const { t } = useTranslation(); // Translation hook

  // Handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-container">
      <NavBar /> {/* Add the NavBar component */}
      <div className="profile-main">
        {/* Left Section */}
        <div className="profile-left-section">
          <div className="profile-image-container">
            <img
              src="profile_image_url"
              alt="Profile"
              className="profile-image"
            />
            <input type="file" className="profile-input" />
          </div>
          <div className="profile-text">
            <h2 className="profile-name">Lisa Susan</h2>
            <p className="profile-location">Sri Lanka</p>
            <p className="profile-phone">+94 685 254 238</p>
            <p className="profile-nic">NIC: 2000568924158</p>
            <p className="profile-email-link">lisaSus@gmail.com</p>
            <button className="profile-update-btn">Update</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="profile-right-section">
          <h3 className="profile-info-heading">
            {t("profile.Profile-Information")}
          </h3>
          <div className="profile-buttons-container">
            <div className="profile-btn-group">
              {/* Tab Buttons */}
              <button
                className={`profile-btn ${
                  activeTab === "personal"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => handleTabChange("personal")}
              >
                {t("profile.Personal-details")}
              </button>
              <button
                className={`profile-btn ${
                  activeTab === "security"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => handleTabChange("security")}
              >
                {t("profile.security")}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="profile-content">
            {activeTab === "personal" && <ProfileDetails />}
            {activeTab === "security" && <ProfileSecurity />}
          </div>
        </div>
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default Profile;
