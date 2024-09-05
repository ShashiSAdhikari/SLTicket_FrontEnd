import React, { useState, useEffect } from "react";
import "./navStyles.css";
import LanDropDown from "../LanDropDown/LanDropDown";
import Logo from "../../assets/Icons/SLTickets.svg";
import { useTranslation } from "react-i18next";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector(".navbar");
      if (menuOpen && nav && !nav.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <img src={Logo} alt="SLTickets" className="logo" />
        </a>
        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <a href="#" className="nav-link">
            <i className="fa-solid fa-bullhorn"></i> {t("nav.hostYourEvent")}
          </a>
          <a href="#" className="nav-link">
            <i className="fa-regular fa-calendar"></i> {t("nav.event")}
          </a>
          <a href="#" className="nav-link">
            <i className="fa-regular fa-address-card"></i> {t("nav.register")}
          </a>
          <a href="#" className="nav-link disabled">
            <i className="fa-regular fa-user"></i> {t("nav.signIn")}
          </a>
          <LanDropDown />
        </div>
        <div className="mobile-menu">
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {menuOpen ? (
              <svg
                className="mobile-menu-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="mobile-menu-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
