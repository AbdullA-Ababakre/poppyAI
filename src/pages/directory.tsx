import React from "react";
import dynamic from "next/dynamic";

const CreatorDirectory = dynamic(() => import("../component/CreatorDirectory"));
const HeaderMain = dynamic(() => import("../component/HeaderMain"));
const Footer = dynamic(() => import("../component/Footer"));

function directory() {
  const postToSetup = async () => {
    const res = await fetch("/api/config-table", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
  };

  return (
    <>
      <HeaderMain hasTitle={false} />
      <CreatorDirectory />
      <div style={{ marginTop: "8rem" }}>
        <Footer />
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
        onClick={postToSetup}
      >
        Setup11111
      </button>
    </>
  );
}

export default directory;
