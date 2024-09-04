import React from "react";
import "./navStyles.css";
import LanDropDown from "../LanDropDown/LanDropDown";
import Logo from "../../assets/Icons/SLTickets.svg";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <img src={Logo} alt="SLTickets" className="logo" />
        </a>
        <div className="navbar-menu">
          <a href="#" className="nav-link">
            {t("nav.hostYourEvent")}
          </a>
          <a href="#" className="nav-link">
            {t("nav.event")}
          </a>
          <a href="#" className="nav-link">
            {t("nav.register")}
          </a>
          <a href="#" className="nav-link disabled">
            {t("nav.signIn")}
          </a>
          <LanDropDown />
        </div>
        <div className="mobile-menu">
          <button className="mobile-menu-button">
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
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
