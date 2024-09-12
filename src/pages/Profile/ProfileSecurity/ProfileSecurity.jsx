import React, { useState } from "react";
import "./profileSecurityStyles.css"; // Import the external stylesheet
import { useTranslation } from "react-i18next"; // Import the hook to use translation

const ProfileSecurity = () => {
  const { t } = useTranslation(); // Translation hook
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <form className="form">
      <div className="input-group">
        <label className="label">{t("profileSecurity.oldPw")}</label>
        <input
          type="password"
          name="oldPassword"
          placeholder={t("profileSecurity.oldPwPlaceholder")} // Translated placeholder
          value={formData.oldPassword}
          onChange={handleChange}
          className="input"
        />
      </div>
      <div className="input-group">
        <label className="label">{t("profileSecurity.newPw")}</label>
        <input
          type="password"
          name="newPassword"
          placeholder={t("profileSecurity.newPwPlaceholder")} // Translated placeholder
          value={formData.newPassword}
          onChange={handleChange}
          className="input"
        />
      </div>
      <div className="input-group">
        <label className="label">{t("profileSecurity.confirmPw")}</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder={t("profileSecurity.confirmPwPlaceholder")} // Translated placeholder
          value={formData.confirmPassword}
          onChange={handleChange}
          className="input"
        />
      </div>
      <div className="button-group">
        <button type="button" onClick={handleSubmit} className="submit-button">
          {t("profileSecurity.update")}
        </button>
      </div>
    </form>
  );
};

export default ProfileSecurity;
