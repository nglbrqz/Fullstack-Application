import React, { useState } from "react";
import "./footerstyle.css";
import logo from "../assets/newlifelogowhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faemai } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer class="footer">
      <div class="start-learning">
        <div class="footer-start">
          <div class="texts">
            <h2 class="section-title">Make a Difference Today</h2>
            <h3 class="section-sub-heading">
              <span>Volunteer for our</span> <strong>Charity Program</strong>
              <span> and </span> <strong>Change Lives</strong>
            </h3>
          </div>
          <a href="#" class="button">
            <span class="label">Join the Charity Program</span>
          </a>
        </div>
      </div>

      <div className="footer-content-container">
        <div className="footer-logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="footer-social-icons">
          <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
          <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
        </div>
        <div className="footer-links">
          <a href="">HOME</a>
          <a href="">ABOUT US</a>
          <a href="">SERVICES</a>
          <a href="">VOLUNTEER</a>
          <a href="">GIVE</a>
          <a href="">FAQS</a>
        </div>
       
        <div className="footer-copyright">
          <p>&copy; 2021 New Life. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
