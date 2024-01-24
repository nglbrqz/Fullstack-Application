 import { useState } from "react";
import PropTypes from "prop-types";

import "./Component Styles/ConnectGroupCard.css"; // Import the stylesheet

const ConnectGroupCard = ({ connectgroup }) => {
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
    <div className="connect-group-card">
      <div className="connect-group-card-img">
        <img
          src={connectgroup.imageUrl || "https://via.placeholder.com/550x250"}
          alt="Placeholder"
          className="connect-group-image"
        />
      </div>
      <div className="connect-group-card-info">
        <div className="connect-group-card-text">
          <p className="connect-group-text-title">{connectgroup.title || "Default Title"}</p>
         </div>
        <div className="connect-group-card-icon">
          <svg
            viewBox="0 0 28 25"
            className="connect-group-icon"
            onClick={handleButtonClick}
          >
            <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
          </svg>
        </div>
      </div>

      {showModal && (
        <div className="connect-group-category-modal-overlay" onClick={closeModal}>
          <div
            className="connect-group-category-modal-content"
            onClick={stopPropagation}
          >
            <div className="connect-group-category-modal-header">
              <div
                className="connect-group-category-close-button"
                onClick={closeModal}
              >
                X
              </div>
            </div>
            <div className="connect-group-category-modal-wrapper">
              <div className="connect-group-category-image-container">
                <img
                  className="connect-group-category-img"
                  src={connectgroup.imageUrl || ""}
                  alt="connect-group Placeholder"
                />
              </div>
              <div className="connect-group-category-text-container">
                <h1 className="connect-group-category-title">
                  {connectgroup.title || "Default Category Title"}
                </h1>
                <p className="connect-group-category-description">
                  {connectgroup.description || "Default Category Description"}
                </p>
              </div>
            </div>
            <div className="connect-group-category-button-wrapper">
              <button className="connect-group-button">
                <span className="connect-group-button-span">Join</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ConnectGroupCard.propTypes = {
  connectgroup: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ConnectGroupCard;
