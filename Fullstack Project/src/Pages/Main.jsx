import { useRef } from "react";
  import "../Pages/Page Styles/Main.css";
import NavBar from "../Components/navBar";
 import Footer from "../Components/Footer";
import Gallery from "../Components/AccomplishmentGallery";
import FAQ from "../Components/FAQ";
import EventGallery from "../Components/EventGallery";
import MinistryCard from "../Components/MinistryCard";
import ministriesData from "../JSON Data/ministries.json";

function Main() {
  // This is used for refering to the parent component by both nav and footer components
  const HomeRef = useRef();
  const AboutRef = useRef();
  const FaqRef = useRef();

  return (
    <>
     
        <div ref={HomeRef} className="hero-header-container">
          <NavBar  />
          
          
 
          <div className="header-text-container">
            <h1 className="hero-title">MAKING JESUS KNOWN</h1>
          </div>
          
        </div>

        <div className="hero-container-welcome-section">
          <h1>Welcome </h1>
          <h2>Lorem</h2>
          <div className="video-placeholder"></div>
        </div>

        <div ref={AboutRef} className="hero-container-about-section">
          <div className="hero-container-about-section-image-wrapper">
            <hr className="hero-container-about-section-image-wrapper-top-line" />
            <div className="hero-container-about-section-image-container">
              <img src="" alt="" />
              <h1 className="hero-container-about-section-image-container-title">
                About Us
              </h1>
            </div>
            <hr className="hero-container-about-section-image-wrapper-bottom-line" />
          </div>

          <div className="hero-container-about-section-description-container">
            <div className="hero-container-about-section-description-wrapper">
              <div className="hero-container-about-section-description-map-container">
                <h1 className="hero-container-about-section-description-title">
                  Lorem Ipsum
                </h1>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.650186562484!2d121.047726475101!3d14.331740786123406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d7ab97796a8f%3A0xbb590b90a63ac105!2sNew%20Life!5e0!3m2!1sen!2sph!4v1705091247844!5m2!1sen!2sph"
                  width="400"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="hero-container-about-section-description-text-container">
                <p className="hero-container-about-section-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  soluta exercitationem, officiis architecto eaque quo quas
                  explicabo porro natus. Aliquid autem asperiores eligendi
                  repellat quaerat modi consectetur id non provident?
                </p>
                <p className="hero-container-about-section-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  soluta exercitationem, officiis architecto eaque quo quas
                  explicabo porro natus. Aliquid autem asperiores eligendi
                  repellat quaerat modi consectetur id non provident?
                </p>
                <p className="hero-container-about-section-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  soluta exercitationem, officiis architecto eaque quo quas
                  explicabo porro natus. Aliquid autem asperiores eligendi
                  repellat quaerat modi consectetur id non provident?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-container-founder-container">
          <div className="hero-container-founder-flex-wrapper" id="founder1">
            <div className="founder-flex-text-container">
              <h1 className="founder-title">Lorem Ipsum</h1>
              <h3 className="founder-description">Sus, Impostor</h3>
              <p className="content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                soluta exercitationem, officiis architecto eaque quo quas
                explicabo porro natus. Aliquid autem asperiores eligendi
                repellat quaerat modi consectetur id non provident?
              </p>
              <p className="content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                soluta exercitationem, officiis architecto eaque quo quas
                explicabo porro natus. Aliquid autem asperiores eligendi
                repellat quaerat modi consectetur id non provident?
              </p>
              <p className="content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                soluta exercitationem, officiis architecto eaque quo quas
                explicabo porro natus. Aliquid autem asperiores eligendi
                repellat quaerat modi consectetur id non provident?
              </p>
            </div>
            <div className="founder-flex-image-container">
              <img className="founder-img" src="" alt="" />
            </div>
          </div>
          <div className="hero-container-founder-flex-wrapper" id="founder2">
            <div className="founder-flex-image-container">
              <img className="founder-img" src="" alt="" />
            </div>
            <div className="founder-flex-text-container">
              <h1 className="founder-title">Lorem Ipsum</h1>
              <h3 className="founder-description">Sus, Impostor</h3>
              <p className="content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                soluta exercitationem, officiis architecto eaque quo quas
                explicabo porro natus. Aliquid autem asperiores eligendi
                repellat quaerat modi consectetur id non provident?
              </p>
              <p className="content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                soluta exercitationem, officiis architecto eaque quo quas
                explicabo porro natus. Aliquid autem asperiores eligendi
                repellat quaerat modi consectetur id non provident?
              </p>
              <p className="content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                soluta exercitationem, officiis architecto eaque quo quas
                explicabo porro natus. Aliquid autem asperiores eligendi
                repellat quaerat modi consectetur id non provident?
              </p>
            </div>
          </div>
        </div>

        <div className="hero-container-mission_vision-container">
          <div className="hero-container-mission-flex-wrapper">
            <div className="mission-flex-image-container">
              <img
                className="mission-img"
                src="https://via.placeholder.com/500x440"
                alt="Mission Image Placeholder"
              />{" "}
            </div>
            <div className="mission-flex-text-container">
              <h1 className="mission-title">Mission</h1>
              <h3 className="mission-description">Sus, Impostor</h3>
              <p className="mission-content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                soluta exercitationem, officiis architecto eaque quo quas
                explicabo porro natus. Aliquid autem asperiores eligendi
                repellat quaerat modi consectetur id non provident?
              </p>
              <p className="mission-content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                soluta exercitationem, officiis architecto eaque quo quas
                explicabo porro natus. Aliquid autem asperiores eligendi
                repellat quaerat modi consectetur id non provident?
              </p>
              <p className="mission-content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                soluta exercitationem, officiis architecto eaque quo quas
                explicabo porro natus. Aliquid autem asperiores eligendi
                repellat quaerat modi consectetur id non provident?
              </p>
            </div>
          </div>

          <div className="hero-container-vision-flex-wrapper">
            <div className="vision-flex-text-container">
              <h1 className="vision-title">Vision</h1>
              <h3 className="vision-description">Sus, Impostor</h3>
              <p className="vision-content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                soluta exercitationem, officiis architecto eaque quo quas
                explicabo porro natus. Aliquid autem asperiores eligendi
                repellat quaerat modi consectetur id non provident?
              </p>
              <p className="vision-content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                soluta exercitationem, officiis architecto eaque quo quas
                explicabo porro natus. Aliquid autem asperiores eligendi
                repellat quaerat modi consectetur id non provident?
              </p>
              <p className="vision-content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                soluta exercitationem, officiis architecto eaque quo quas
                explicabo porro natus. Aliquid autem asperiores eligendi
                repellat quaerat modi consectetur id non provident?
              </p>
            </div>
            <div className="vision-flex-image-container">
              <img
                className="vision-img"
                src="https://via.placeholder.com/500x440"
                alt="Vision Image Placeholder"
              />{" "}
            </div>
          </div>
        </div>

        <div className="hero-container-gallery-container">
          <Gallery />
        </div>

        <div className="hero-container-ministry-container">

        <div className="hero-container-ministry-title">
          <h1>Ministries</h1>
           </div>

          <div className="hero-container-ministry-wrapper">
            
            {ministriesData.map((ministry) => (
              <MinistryCard key={ministry.ministryid} data={ministry} />
            ))}
          </div>

          <div className="hero-container-ministry-button">
            <button className="ministry-button">VIEW MORE</button>
          </div>
        </div>

        <div className="hero-container-event-gallery-container">
          <EventGallery />
        </div>

        <div ref={FaqRef} className="hero-container-faq-section">
          <FAQ />
        </div>

        <div className="hero-container-footer-container">
          <Footer HomeRef={HomeRef} AboutRef={AboutRef} FaqRef={FaqRef} />
        </div>
      
    </>
  );
}

export default Main;
