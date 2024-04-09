import React, { useState } from "react";
import "./index.scss"; // Consider renaming the SCSS file accordingly

export type AlertMessageType = "error" | "success";
interface AlertBannerProps {
  message: string | null;
  messageType: AlertMessageType;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ message, messageType }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!message || !isVisible) return null;

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  return (
    <div className={`alert-banner ${messageType}`}>
      <p>{message}</p>
      <button onClick={handleCloseClick} className="close-button">
        &times;
      </button>
    </div>
  );
};

export default AlertBanner;
