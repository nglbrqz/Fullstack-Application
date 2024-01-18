import { useState, useEffect } from "react";
import "./Component Styles/navbar.css";
import logo from "../assets/newlifelogowhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
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
          <img src={logo} alt="Logo" className="nav-logo" id="nav-logo" />
        </div>

        <div className="navbar-middle">
          <a href="/about">About</a>
          <a href="/events">Events</a>

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
        </div>

        <div className="navbar-right">
          <button className="navbar-donate-button">Donate</button>

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
          <img src={logo} alt="Logo" className="nav-logo" id="modal-nav-logo" />

          <div className="navbar-modal-content">
            <a href="/about">About</a>
            <a href="/events">Events</a>

      
          </div>

          {/* Join Dropdown */}
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
 
          <div className="navbar-modal-button">
            <button className="navbar-donate-button">Donate</button>
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


