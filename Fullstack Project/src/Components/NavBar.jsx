import { useState } from "react";
import "./Component Styles/navbar.css";
import logo from "../assets/newlifelogowhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
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

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="navbar-middle">
          <a href="/about">About</a>
          <a href="/events">Events</a>

          <div className="dropdown">
            <button className="dropbtn" onClick={toggleJoinDropdown}>
              Join
            </button>
            {joinDropdownOpen && (
              <div className="dropdown-content">
                <a href="/join-option1">Option 1</a>
                <a href="/join-option2">Option 2</a>
                <a href="/join-option3">Option 3</a>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleServicesDropdown}>
              Services
            </button>
            {servicesDropdownOpen && (
              <div className="dropdown-content">
                <a href="/service1">Service 1</a>
                <a href="/service2">Service 2</a>
                <a href="/service3">Service 3</a>
              </div>
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

        <div className="overlay" id="nav-overlay" style={{ width: `${overlayWidth}%` }}>
          <a className="closebtn" onClick={toggleMobileMenu}>&times;</a>
          <div className="overlay-content">
            <img src={logo} alt="Logo" className="logo" />
            <button className="dropdown-btn">MENU</button>

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
