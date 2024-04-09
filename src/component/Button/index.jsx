import React from "react";
import "./index.scss"; // Make sure to create a corresponding CSS file

const CustomButton = ({ onClick , style = {}, text = "", type = "primary" }) => {
  return (
    <button
      className={`demoButton demoButton--${type}`}
      onClick={onClick}
      style={{ ...style }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
