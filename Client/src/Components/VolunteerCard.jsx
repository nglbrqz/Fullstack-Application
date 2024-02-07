import PropTypes from "prop-types";
import { useState } from "react";
import JoinUsModal from "./Modals/JoinUsModal.jsx";
import "./Component Styles/VolunteerCard.css"; // Import the stylesheet

const VolunteerCard = ({ volunteer }) => {
  const [showModal, setShowModal] = useState(false);
  const [source, setSource] = useState('volunteer');

  function handleButtonClick() {
    setShowModal(true);
  }

  return (
    <div className="volunteer-card">
      <div className="volunteer-card-container">
        <img
          onClick={handleButtonClick}
          src={volunteer.backgroundimage}
          className="volunteer-card-image"
        />

        {showModal && (
          <JoinUsModal
          joinusmodal={volunteer}
          closeModal={() => setShowModal(false)}
          joinLink="/registrationvolunteer"
          source={source} 
        />
      )}
      </div>
    </div>
  );
};

VolunteerCard.propTypes = {
  volunteer: PropTypes.shape({
    backgroundimage: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default VolunteerCard;
