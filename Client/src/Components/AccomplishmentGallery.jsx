import { useState } from "react";
import "./Component Styles/Gallery.css"; // Create this file for your custom styles
import jsonData from "../JSON Data/gallery.json"; // Adjust the path as needed

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = jsonData;

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="gallery-header-container">
        <h1>Gallery</h1>
        <hr />
        <h3>Accomplishments</h3>
      </div>
      <div className="gallery-container">
        <div className="image-container">
          <button className="arrow-btn left-arrow-btn" onClick={handlePrev}>
            &#8249;
          </button>
          <div className="image-content">
            <img
              src={images[currentIndex].accomplishmentUrl}
              alt={`Gallery Image ${currentIndex + 1}`}
            />
            <h3>{images[currentIndex].accomplishmentTitle}</h3>
            <p>{images[currentIndex].accomplishmentDescription}</p>
          </div>
          <button className="arrow-btn right-arrow-btn" onClick={handleNext}>
            &#8250;
          </button>
        </div>
        <div className="carousel-indicator">
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
