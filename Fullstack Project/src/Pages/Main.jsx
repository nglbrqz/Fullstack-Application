import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../Pages/Page Styles/Main.css"
import NavBar from "../Components/navBar";
import PromoVideo from "../assets/promovid.mp4";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";
import VolunteerCard from "../Components/VolunteerCard";

function Main() {
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
          <div className="container">
            <div className="hero-container-about-section-image-container">
              <img src="" alt="" />
            </div>

            <h1 className="page-title">About Us</h1>
            <main>
              <article className="content">
                <section className="content__descriptor">
                  <h2 className="content__title">Info</h2>
                </section>
                <section className="content__text-box">
                  <p className="content__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt soluta exercitationem, officiis architecto eaque quo
                    quas explicabo porro natus. Aliquid autem asperiores
                    eligendi repellat quaerat modi consectetur id non provident?
                  </p>
                  <p className="content__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt soluta exercitationem, officiis architecto eaque quo
                    quas explicabo porro natus. Aliquid autem asperiores
                    eligendi repellat quaerat modi consectetur id non provident?
                  </p>
                  <p className="content__text">
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
      </div>

      <div className="hero-container-founder-container">
        <div className="hero-container-founder-flex-wrapper">
          <div className="founder-flex-text-container">
            <h1 className="founder-title">Lorem Ipsum</h1>
            <h3 className="founder-description">Sus, Impostor</h3>
            <p className="content__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              soluta exercitationem, officiis architecto eaque quo quas
              explicabo porro natus. Aliquid autem asperiores eligendi repellat
              quaerat modi consectetur id non provident?
            </p>
            <p className="content__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              soluta exercitationem, officiis architecto eaque quo quas
              explicabo porro natus. Aliquid autem asperiores eligendi repellat
              quaerat modi consectetur id non provident?
            </p>
            <p className="content__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              soluta exercitationem, officiis architecto eaque quo quas
              explicabo porro natus. Aliquid autem asperiores eligendi repellat
              quaerat modi consectetur id non provident?
            </p>
          </div>
          <div className="founder-flex-image-container">
            <img className="founder-img" src="" alt="" />
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
              explicabo porro natus. Aliquid autem asperiores eligendi repellat
              quaerat modi consectetur id non provident?
            </p>
            <p className="mission-content__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              soluta exercitationem, officiis architecto eaque quo quas
              explicabo porro natus. Aliquid autem asperiores eligendi repellat
              quaerat modi consectetur id non provident?
            </p>
            <p className="mission-content__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              soluta exercitationem, officiis architecto eaque quo quas
              explicabo porro natus. Aliquid autem asperiores eligendi repellat
              quaerat modi consectetur id non provident?
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
              explicabo porro natus. Aliquid autem asperiores eligendi repellat
              quaerat modi consectetur id non provident?
            </p>
            <p className="vision-content__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              soluta exercitationem, officiis architecto eaque quo quas
              explicabo porro natus. Aliquid autem asperiores eligendi repellat
              quaerat modi consectetur id non provident?
            </p>
            <p className="vision-content__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              soluta exercitationem, officiis architecto eaque quo quas
              explicabo porro natus. Aliquid autem asperiores eligendi repellat
              quaerat modi consectetur id non provident?
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

      <div className="hero-container-accomplishment-container"></div>

      <div className="hero-container-card-container">
        <FAQ />
      </div>

      <div className="hero-volunteer-container">
        <div className="hero-volunteer-wrapper">
        <VolunteerCard
            imageUrl=" "
            details="Lorem ipsum dolor sit ame nderit repellat consequatur, voluptatum
        sint optio sed incidunt, ipsa officia in delectus mollitia iusto,
        doloribus sit magnam. Cumque."
          />
          <VolunteerCard
            imageUrl=" "
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quas.
        Perferendis beatae reprehenderit repellat consequatur, voluptatum
        sint optio sed incidunt, ipsa officia in delectus mollitia iusto,
        doloribus sit magnam. Cumque."
          />
          <VolunteerCard
            imageUrl=" "
            details="Lorem ipsum dolor sit ame nderit repellat consequatur, voluptatum
        sint optio sed incidunt, ipsa officia in delectus mollitia iusto,
        doloribus sit magnam. Cumque."
          />
          <VolunteerCard
            imageUrl=" "
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quas.
        Perferendis beatae reprehenderit repellat consequatur, voluptatum
        sint optio sed incidunt, ipsa officia in delectus mollitia iusto,
        doloribus sit magnam. Cumque."
          />
        </div>
      </div>

      <div className="hero-imbedded-video-container">
        <div className="hero-imbedded-video-container-text-container">
          <h1>Lorem Ipsum</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quas.
            Perferendis beatae reprehenderit repellat consequatur, voluptatum
            sint optio sed incidunt, ipsa officia in delectus mollitia iusto,
            doloribus sit magnam. Cumque.
          </h4>
        </div>

        <div className="hero-imbedded-video-container-video-placeholder-container"></div>
        <div className="hero-imbedded-video-container-text-container">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quas.
            Perferendis beatae reprehenderit
          </h4>
        </div>
        <div className="hero-imbedded-video-container-video-placeholder-container"></div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
