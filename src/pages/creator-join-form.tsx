import React from "react";
import CreatorJoinForm from "../component/CreatorJoinForm";
import HeaderMain from "../component/HeaderMain";

function creatorJoinForm() {
  return (
    <div>
      <HeaderMain />
      <CreatorJoinForm redirect={"/"} />
    </div>
  );
}

export default creatorJoinForm;
