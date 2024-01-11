import PropTypes from 'prop-types';
import { useState } from 'react';
import "./Component Styles/VolunteerCard.css"; // Import the stylesheet

const VolunteerCard = ({ imageUrl, details }) => {
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick() {
        setShowModal(true);
    }

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="volunteer-card">
      <img src={imageUrl} alt="Volunteer Placeholder" className="card-image" />
      <button onClick={handleButtonClick} className="card-button">
        JOIN US
      </button>

      {showModal && (
        <div className="volunteer-category-modal-overlay" onClick={closeModal}>
          <div className="volunteer-category-modal-content">
            <div className="volunteer-category-modal-wrapper">
              <div className="volunteer-category-image-container">
                <img
                  className="volunteer-category-img"
                  src={imageUrl}
                  alt="Volunteer Placeholder"
                />
              </div>
              <div className="volunteer-category-text-container">
                <h1 className="volunteer-category-title">Creative Mfers</h1>
                <p className="volunteer-category-description">{details}</p>
              </div>
            </div>
            <div className="volunteer-category-button-wrapper">
              <button
                onClick={closeModal}
                className="volunteer-category-button-close"
              >
                Close
              </button>
              <button className="volunteer-category-button-jooin">Join</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

VolunteerCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};


export default VolunteerCard;
