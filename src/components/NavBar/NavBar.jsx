import React, { useState, useEffect } from "react";
import "./navStyles.css";
import LanDropDown from "../LanDropDown/LanDropDown";
import Logo from "../../assets/Icons/SLTickets.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to track if mobile menu is open
  const { t } = useTranslation();

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Effect to close the mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector(".navbar");
      if (menuOpen && nav && !nav.contains(event.target)) {
        setMenuOpen(false); // Close the menu if click is outside the navbar
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup the event listener
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand logo linking to the home page */}
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="SLTickets" className="logo" />
        </Link>

        {/* Menu links */}
        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <Link to="/host-your-event" className="nav-link">
            <i className="fa-solid fa-bullhorn"></i> {t("nav.hostYourEvent")}
          </Link>
          <Link to="/event" className="nav-link">
            <i className="fa-regular fa-calendar"></i> {t("nav.event")}
          </Link>
          <Link to="/register" className="nav-link">
            <i className="fa-regular fa-address-card"></i> {t("nav.register")}
          </Link>
          {/* Sign In is a placeholder link */}
          <Link to="/sign-in" className="nav-link disabled">
            <i className="fa-regular fa-user"></i> {t("nav.signIn")}
          </Link>

          {/* Language dropdown */}
          <LanDropDown />
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu">
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {menuOpen ? (
              // SVG for close icon
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
              // SVG for hamburger icon (open menu)
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
