import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../../Images/applogo2.png";

export const Header = () => {     //Named export
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



