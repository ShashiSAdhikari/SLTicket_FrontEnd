import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/Icons/SLTickets.svg";
import "./footerStyles.css"; // Import the footer styles

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerLogo">
          <img src={Logo} alt="SLTickets" className="mb-2" />
          <p className="footerContent">{t("footer.description")}</p>
        </div>
        <div className="footerLinks">
          <a href="#">{t("nav.hostYourEvent")}</a> |
          <a href="#">{t("nav.event")}</a>
        </div>
        <div className="footerSocial">
          <a href="#" className="socialLink">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="socialLink">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="socialLink">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footerCopyRights">
        <p>© 2024 SLTMobitel.{t('footer.rights')}</p>
      </div>
    </footer>
  );
}

export default Footer;
