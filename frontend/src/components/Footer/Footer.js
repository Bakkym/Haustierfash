import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.png"

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="logo-container footer-logo">
        <img
          src={logo}
          alt=""
        />
        <span>© Haustierfash 2022 - All rights reserved</span>
      </div>
    </div>
  );
}
