import React from "react";

const SupportLink = () => {
  const emailAddress = "support@sharely.fun";

  const handleSupportClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <a
      style={{ color: "inherit", textDecoration: "none" }}
      href="/"
      onClick={handleSupportClick}
    >
      Support
    </a>
  );
};

export default SupportLink;
