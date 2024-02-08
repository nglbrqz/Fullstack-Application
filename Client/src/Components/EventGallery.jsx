import { useState, useEffect } from "react";
import "./Component Styles/eventGallery.css";
import jsonData from "../JSON Data/gallery.json";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = jsonData;

  const incrementIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(incrementIndex, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="event-gallery-container">
        <div className="event-image-container">
          <div className="event-image-container">
            <h2>EVENTS</h2>
            <div className="event-image-content">
              <div className="image-overlay" />
              <img
                src={images[currentIndex].accomplishmentUrl}
                alt={`Gallery Image ${currentIndex + 1}`}
              />
            </div>
            <Link to="/events">
            <button className="link-button" role="button">
              VIEW MORE
            </button>
            </Link>

          </div>
        </div>
        <div className="event-gallery-carousel-indicator">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
