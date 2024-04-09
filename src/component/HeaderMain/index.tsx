import React from "react";
import CustomButton from "../Button/index";
import { useRouter } from "next/navigation";
import "./index.scss";

function HeaderMain({ hasTitle = true }: { hasTitle?: Boolean }) {
  const router = useRouter();

  return (
    <div className="header-main">
      <div className="header-main--nav">
        <h2>Poppy.AI</h2>
        <div className="header-main--submit-btn">
          <CustomButton
            text="Login"
            onClick={() => router.push("#")}
          />
        </div>
      </div>
      {!hasTitle && (
        <div className="header-main--title">
          <h1>TURNS YOUR VIDEOS INTO EMAILS THAT</h1>
          <p>SELL... WITH AI</p>
        </div>
      )}
    </div>
  );
}

export default HeaderMain;
