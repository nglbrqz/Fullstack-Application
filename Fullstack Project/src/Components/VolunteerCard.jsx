import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import "./Component Styles/VolunteerCard.css"; // Import the stylesheet

const VolunteerCard = ({ volunteer }) => {
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
    <div className="volunteer-card">
      <div className="volunteer-card-container">
        <img
          onClick={handleButtonClick}
          src="{volunteer.imageUrl}"
           className="volunteer-card-image"
        />

        {showModal && (
          <div
            className="volunteer-category-modal-overlay"
            onClick={closeModal}
          >
            <div
              className="volunteer-category-modal-content"
              onClick={stopPropagation}
            >
              <div className="ministry-category-modal-header">
                <div
                  className="ministry-category-close-button"
                  onClick={closeModal}
                >
                  X
                </div>
              </div>
              <div className="volunteer-category-modal-wrapper">
                <div className="volunteer-category-image-container">
                  <img
                    className="volunteer-category-img"
                    src={volunteer.imageUrl}
                    alt="Volunteer Placeholder"
                  />
                </div>
                <div className="volunteer-category-text-container">
                  <h1 className="volunteer-category-title">{volunteer.title}</h1>
                  <p className="volunteer-category-description">{volunteer.description}</p>
                </div>
              </div>
              <div className="volunteer-category-button-wrapper">
              <Link to="/registration"><button className="volunteer-button">
                  <span className="volunteer-button-span">Join</span>
                </button></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

VolunteerCard.propTypes = {
  volunteer: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default VolunteerCard;
