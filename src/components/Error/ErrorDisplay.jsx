// components/ErrorDisplay/ErrorDisplay.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./errorStyles.css"; // Import the external CSS file

const ErrorDisplay = ({ message, type }) => {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  const handleClose = () => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  if (!message || !visible) return null;

  const bgClass = classNames({
    "error-message-bg-info": type === "info",
    "error-message-bg-success": type === "success",
    "error-message-bg-danger": type === "danger",
  });

  return (
    <div
      className={`error-message ${
        exiting ? "error-message-exit" : "error-message-enter"
      } ${bgClass}`}
    >
      {/* Error message */}
      <p>{message}</p>

      {/* Close button */}
      <button className="error-message-close-btn" onClick={handleClose}>
        {/* SVG for close icon */}
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
      </button>
    </div>
  );
};

ErrorDisplay.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["info", "success", "danger"]).isRequired,
};

export default ErrorDisplay;
