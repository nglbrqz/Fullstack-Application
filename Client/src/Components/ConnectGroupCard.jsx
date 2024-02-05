import { useState } from "react";
import PropTypes from "prop-types";
import JoinUsModal from "./Modals/JoinUsModal.jsx";
import "./Component Styles/ConnectGroupCard.css";

const ConnectGroupCard = ({ connectgroup }) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
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
        </div>
        <div className="connect-group-card-icon">
          <svg
            viewBox="0 0 28 25"
            className="connect-group-icon"
            fill="white"
            onClick={handleButtonClick}
          >
            <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
          </svg>
        </div>
      </div>

      {showModal && (
        <JoinUsModal
          joinusmodal={connectgroup}
          closeModal={() => setShowModal(false)}
          joinLink="/registrationconnectgroup"
        />
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
