import React from "react";
import ReactDOM from "react-dom";
import { useState, useContext } from "react";
import logo from "../../Images/applogo2.png";
import { Link } from "react-router-dom";
import userContext from "../Utils/userContext";

export const Header = () => {
  //Named export
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user} = useContext(userContext)
  const loggedInUser = () => {
    return true;
  };
  return (
    <div className="flex justify-between bg-pink-400 ">
      <div className="logo-container">
        <img src={logo} alt="logo" className="h-20 p-5" />
      </div>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-3"><Link to="/">Home</Link></li>
          <li className="px-3"><Link to="/about">About Us</Link></li>
          <li className="px-3"><Link to="/Contact">Contact us</Link></li>
          <li className="px-3"><Link to="/instamart">Instamart</Link></li>
          <li className="px-3"f>Cart</li>
          <h6 className="p-10 font-bold text-red-50">{user.name}</h6>
          <h6 className="p-10 font-bold text-red-50">{user.email}</h6>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};
