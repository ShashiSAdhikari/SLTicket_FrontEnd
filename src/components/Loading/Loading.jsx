import React from "react";
import PropTypes from "prop-types";
import "./loadingStyles.css";

const Loading = () => {
  return (
    <div className="flex items-center justify-center py-4 loader">
      <dotlottie-player
        src="https://lottie.host/f52f9cb8-ca67-457f-8396-414e1d083f63/VF5dHPz4iI.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
