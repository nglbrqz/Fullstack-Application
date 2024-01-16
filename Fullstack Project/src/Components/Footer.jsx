import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Component Styles/footer.css";
import logo from "../assets/newlifelogowhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer({ topRef }) {
  const handleLogoClick = () => {
    // Scroll to the top of the parent component
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  Footer.propTypes = {
    topRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  };
  

  return (
    <footer className="footer">
      <div className="footer-content-container">
        <div className="footer-logo-container" onClick={handleLogoClick}>
          <img src={logo} alt="" />
        </div>
        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com/your-facebook-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
          </a>
          <a
            href="https://www.instagram.com/your-instagram-account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
          </a>
        </div>
        <div className="footer-links">
          <a href="#">ABOUT US</a>
          <a href="#">MINISTRY</a>
          <a href="#">VOLUNTEER</a>
          <a href="#">EVENTS</a>
          <a href="#">GIVE</a>
          <a href="#">FAQS</a>
          <Link to="/login">ADMIN</Link>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2021 New Life. All Rights Reserved</p>
        </div>
      </div>
    </footer>

    
  );

  
}

export default Footer;
