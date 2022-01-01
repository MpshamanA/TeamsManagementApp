import React from "react";
import "../css/header.css";
import logo from "../logo.png";

export const Header = () => {
  return (
    <div>
      <header className="top-hed">
        <div className="title-name">
          <img className="img-logo" src={logo} alt="LOGO" />
        </div>
      </header>
    </div>
  );
};
