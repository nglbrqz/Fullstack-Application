import PropTypes from "prop-types";
import { useState } from "react";
import "./Component Styles/ministryCard.css"; // Import the stylesheet

const MinistryCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick() {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="ministry-card">
      <div className="ministry-title-block">
        <h4 className="ministry-category">{data.category}</h4>
      </div>
      <img
        src={data.imageUrl}
        alt="ministry Placeholder"
        className="ministry-card-image"
      />
      <button onClick={handleButtonClick} className="ministry-card-button">
        VIEW INFO
      </button>

      {showModal && (
        <div className="ministry-category-modal-overlay" onClick={closeModal}>
          <div
            className="ministry-category-modal-content"
            onClick={stopPropagation} 
          >
            <div className="ministry-category-modal-header">
              <div
                className="ministry-category-close-button"
                onClick={closeModal}
              >
                x
              </div>
            </div>
            <div className="ministry-category-modal-wrapper" id="category">
              <div className="ministry-category-modal-image-container">
                <img
                  className="ministry-category-img"
                  src={data.imageUrl}
                  alt="ministry Placeholder"
                />
              </div>
              <div className="ministry-category-text-container">
                <h1 className="ministry-category-title">{data.category}</h1>
                {data.description.map((paragraph, index) => (
                  <p key={index} className="ministry-category-description">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="ministry-category-modal-wrapper" id="pastor">
              <div className="ministry-category-text-container">
                <h1 className="ministry-pastor-name">{data.pastor.name}</h1>
                <p className="ministry-pastor-details">{data.pastor.details}</p>
                <p className="ministry-pastor-quote">{data.pastor.quote}</p>
              </div>
              <div className="ministry-category-modal-image-container">
                <img
                  className="ministry-pastor-img"
                  src={data.pastor.pastorImage}
                  alt="ministry Placeholder"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

MinistryCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    pastor: PropTypes.shape({
      name: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      pastorImage: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MinistryCard;
