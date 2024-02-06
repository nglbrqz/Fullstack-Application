import { useState, useEffect } from "react";
import "./Component Styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import whitelogo from "../assets/siteimages/sitelogo/whitelogo.png";
import blacklogo from "../assets/siteimages/sitelogo/blacklogo.png";

function NavBar({ AboutRef, colorScheme }) {
  const handleAboutClick = () => {
    AboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  NavBar.propTypes = {
    colorScheme: PropTypes.oneOf(["light", "dark"]).isRequired,
    AboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  };

  const [joinDropdownOpen, setJoinDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [overlayWidth, setOverlayWidth] = useState(0);

  const toggleJoinDropdown = () => setJoinDropdownOpen(!joinDropdownOpen);
  const toggleServicesDropdown = () =>
    setServicesDropdownOpen(!servicesDropdownOpen);

  const toggleMobileMenu = () => {
    // Toggle the overlay width between 0% and 100%
    setOverlayWidth((prevWidth) => (prevWidth === 0 ? 100 : 0));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && overlayWidth === 100) {
        setOverlayWidth(0);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [overlayWidth]);

  const textColor = colorScheme === "dark" ? "black" : "white";
  const logoPath = colorScheme === "dark" ? blacklogo : whitelogo;

  return (
    <>
      <nav className="navbar" style={{ color: textColor }}>
        <div className="navbar-left">
          <Link to="/">
            <img src={logoPath} alt="Your Logo" className="navbar-logo" />{" "}
          </Link>
        </div>
        <div className="navbar-middle" style={{ color: textColor }}>
          <Link to="/">
            <a style={{ color: textColor }} onClick={handleAboutClick}>
              About
            </a>{" "}
          </Link>
          <Link to="/events">
            <a style={{ color: textColor }} href="">
              Events
            </a>{" "}
          </Link>

          <div className="dropdown">
            <span
              style={{ color: textColor }}
              className="nav-dropbtn"
              onClick={toggleJoinDropdown}
            >
              Join &#9662;
            </span>
            {joinDropdownOpen && (
              <ul className="nav-dropdown-content">
                <Link to="/joinus#ministry"> 
                  <li>
                    <a  >Ministry</a>
                  </li>
                </Link>
                <Link to="/joinus#volunteer">
                  <li>
                    <a >Volunteer</a>
                  </li>
                </Link>
                <Link to="/joinus">
                  <li>
                    <a >Connect Groups</a>
                  </li>
                </Link>
              </ul>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="dropdown">
            <span
              style={{ color: textColor }}
              className="nav-dropbtn"
              onClick={toggleServicesDropdown}
            >
              Services &#9662;
            </span>
            {servicesDropdownOpen && (
              <ul className="nav-dropdown-content">
                <li>
                  <Link to="/prayer">
                    <a>Prayer Services</a>
                  </Link>
                  <li>
                  <Link to="/pastorialcare">
                    <a>Pastorial Care Services</a>
                  </Link>
                </li>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="navbar-right">
          <Link to="/donate">
            <button className="navbar-donate-button">Donate</button>
          </Link>
          <div className="nav-social-icons" style={{ color: textColor }}>
            <FontAwesomeIcon
              style={{ color: textColor }}
              icon={faFacebook}
              className="facebook-icon"
            />
            <FontAwesomeIcon
              style={{ color: textColor }}
              icon={faInstagram}
              className="instagram-icon"
            />
          </div>
        </div>
      </nav>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} style={{ color: textColor }} />
      </div>

      <div
        className="nav-overlay"
        id="nav-overlay"
        style={{ width: `${overlayWidth}%` }}
      >
        <a className="nav-overlay-closebtn" onClick={toggleMobileMenu}>
          &times;
        </a>
        <div className="overlay-content">
          <Link to="/">
            <img
              src={whitelogo}
              alt="Logo"
              className="nav-logo"
              id="modal-nav-logo"
            />
          </Link>
          <div className="navbar-modal-content">
            <Link to="/">
              <a onClick={[handleAboutClick, toggleMobileMenu]}>About</a>{" "}
            </Link>
            <Link to="/">
              <a href="/events" onClick={toggleMobileMenu}>
                Events
              </a>{" "}
            </Link>
          </div>

          {/* Join Dropdown */}
          <div className="dropdown">
            <span className="nav-dropbtn" onClick={toggleJoinDropdown}>
              Join &#9662;
            </span>
            {joinDropdownOpen && (
              <ul className="nav-dropdown-content">
                <li>
                  <a href="/service1">Prayer Service</a>
                </li>
              </ul>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="dropdown">
            <span className="nav-dropbtn" onClick={toggleServicesDropdown}>
              Services &#9662;
            </span>
            {servicesDropdownOpen && (
              <ul className="nav-dropdown-content">
                <li>
                  <Link to="prayer">
                    <a>Prayer Services</a>
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="navbar-modal-button">
            <Link to="/donate">
              <button
                className="navbar-donate-button"
                onClick={toggleMobileMenu}
              >
                Donate
              </button>{" "}
            </Link>
          </div>
          <div className="nav-social-icons">
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
