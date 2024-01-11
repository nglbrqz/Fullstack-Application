
import "./Component Styles/footer.css"
import logo from "../assets/newlifelogowhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="start-learning">
        <div className="footer-start">
          <div className="texts">
            <h2 className="section-title">Make a Difference Today</h2>
            <h3 className="section-sub-heading">
              <span>Volunteer for our</span> <strong>Charity Program</strong>
              <span> and </span> <strong>Change Lives</strong>
            </h3>
          </div>
          <a href="#" className="button">
            <span className="label">Join the Charity Program</span>
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
          <a href="">MINISTRY</a>
          <a href="">VOLUNTEER</a>
          <a href="">EVENTS</a>
          <a href="">GIVE</a>
          <a href="">FAQS</a>
          <a href="">ADMIN</a>
        </div>
       
        <div className="footer-copyright">
          <p>&copy; 2021 New Life. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
