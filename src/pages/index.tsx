import React from "react";
import dynamic from "next/dynamic";
const CreatorDirectory = dynamic(() => import("../component/CreatorDirectory"));
const Footer = dynamic(() => import("../component/Footer"));
const HeaderMain = dynamic(() => import("../component/HeaderMain"));
const CreatorJoinForm = dynamic(() => import("../component/CreatorJoinForm"));

const HomePage = () => {
  return (
    <div>
      <HeaderMain hasTitle={false} />
      <CreatorDirectory />
    </div>
  );
};

export default HomePage;
