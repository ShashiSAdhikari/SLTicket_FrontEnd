import React from "react";
import "./lanDropDownStyles.css";
import "../../i18n";
import { useTranslation } from "react-i18next";

export default function LanDropDown() {
  const languages = [
    { code: "en", name: "English" },
    { code: "sinh", name: "සිංහල" },
    { code: "tam", name: "தமிழ்" },
  ];

  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="lan-dropdown-container">
      <i className="fa-solid fa-language"></i>{" "}
      <select
        onChange={handleLanguageChange}
        defaultValue={i18n.language}
        className="lan-dropdown-select"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
