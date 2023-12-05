import React, { useState } from "react";
import "./style.css";
import logo from "../assets/newlifelogowhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isNightMode, setIsNightMode] = useState(false);

  const changeMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <nav className={`navbar ${isNightMode ? 'night-mode' : ''}`}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-middle">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Events</a>
        <a href="/faq">Give</a>
      </div>

      <div className="navbar-right">
        <button className="button-54" role="button">
          Volunteer
        </button>
        <FontAwesomeIcon
          icon={isNightMode ? faMoon : faSun}
          className={`toggle-icon ${isNightMode ? 'moon' : 'sun'}`}
          onClick={changeMode}
        />
      </div>
    </nav>
  );
}

export default NavBar;
