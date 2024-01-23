import { useState, useEffect } from "react";
import "./Component Styles/navbar.css";
import logo from "../assets/newlifelogowhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ AboutRef }) {
  const handleAboutClick = () => {
    AboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  NavBar.propTypes = {
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

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="Logo" className="nav-logo" id="nav-logo" />
          </Link>{" "}
        </div>

        <div className="navbar-middle">
          <Link to="/">
            <a onClick={handleAboutClick}>About</a>{" "}
          </Link>
          <Link to="/">
            <a href="/events">Events</a>{" "}
          </Link>

          <div className="dropdown">
            <span className="nav-dropbtn" onClick={toggleJoinDropdown}>
              Join &#9662;
            </span>
            {joinDropdownOpen && (
              <ul className="nav-dropdown-content">
                <li>
                  <a href="/service1">Service 1</a>
                </li>
                <li>
                  <a href="/service2">Service 2</a>
                </li>
                <li>
                  <a href="/service3">Service 3</a>
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
                <Link to="prayer"><a>Prayer Services</a></Link>
                </li>
                 
              </ul>
            )}
          </div>
        </div>

        <div className="navbar-right">
          <Link to="/donate">
            <button className="navbar-donate-button">Donate</button>
          </Link>
          <div className="nav-social-icons">
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
          </div>
        </div>
      </nav>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
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
              src={logo}
              alt="Logo"
              className="nav-logo"
              id="modal-nav-logo"
            />
          </Link>
          <div className="navbar-modal-content">
            <Link to="/">
              <a onClick={[handleAboutClick, toggleMobileMenu] }>About</a>{" "}
            </Link>
            <Link to="/">
              <a href="/events" onClick={toggleMobileMenu}>Events</a>{" "}
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
                <Link to="prayer"><a>Prayer Services</a></Link>

                </li>
                 
              </ul>
            )}
          </div>

          <div className="navbar-modal-button">
          <Link to="/donate"><button className="navbar-donate-button" onClick={toggleMobileMenu}>Donate</button> </Link>
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
