import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import NavBar from "./navBar";
import PromoVideo from "../assets/promovid.mp4";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-header-container">
          <NavBar style={{ zIndex: "1" }} />
          <video
            id="backgroundVideo"
            autoPlay
            loop
            muted
            controls
            disablePictureInPicture
          >
            <source src={PromoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>

          <div className="header-text-container">
            <h1 className="hero-title">MAKING JESUS KNOWN</h1>
          </div>
          <div className=""></div>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
          </div>
        </div>

        <div className="hero-container-about-section">
          <div class="container">
            <div className="hero-container-about-section-image-container">
              <img src="" alt="" />
            </div>

            <h1 class="page-title">About Us</h1>
            <main>
              <article class="content">
                <section class="content__descriptor">
                  <h2 class="content__title">Info</h2>
                  
                </section>
                <section class="content__text-box">
                  <p class="content__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt soluta exercitationem, officiis architecto eaque quo
                    quas explicabo porro natus. Aliquid autem asperiores
                    eligendi repellat quaerat modi consectetur id non provident?
                  </p>
                  <p class="content__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt soluta exercitationem, officiis architecto eaque quo
                    quas explicabo porro natus. Aliquid autem asperiores
                    eligendi repellat quaerat modi consectetur id non provident?
                  </p>
                  <p class="content__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt soluta exercitationem, officiis architecto eaque quo
                    quas explicabo porro natus. Aliquid autem asperiores
                    eligendi repellat quaerat modi consectetur id non provident?
                  </p>
                </section>
              </article>
            </main>
          </div>
        </div>

        <div className="hero-container-church-team">
          <h1>UNDER CONSTRUCTION</h1>
        </div>
      </div>

      <div className="hero-core-values-container">
        <div ></div>
      </div>
    </div>
  );
}

export default Hero;
