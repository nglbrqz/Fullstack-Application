import PropTypes from "prop-types";
import { useState } from "react";
import JoinUsModal from "./Modals/JoinUsModal.jsx";
import "./Component Styles/JoinUsMinistryCard.css";

const JoinUsMinistryCard = ({ joinusministrycard }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMinistry, setSelectedMinistry] = useState(null);

    function handleButtonClick() {
        setShowModal(true);
        setSelectedMinistry(joinusministrycard.select);
    }

    return (
        <div className="joinus-ministry-container">
            <div className="joinus-ministry-card-container">
                <img  className="joinus-ministry-card-photo" />
                <div onClick={handleButtonClick} className="joinus-ministry-card-overlay">
                    <h1>{joinusministrycard.title}</h1>
                </div>
            </div>

            {showModal && (
                <JoinUsModal
                    joinusmodal={joinusministrycard}
                    closeModal={() => setShowModal(false)}
                    joinLink={selectedMinistry === "outreach" ? "/registrationevent" : "/registrationvolunteer"}
                />
            )}
        </div>
    );
};

JoinUsMinistryCard.propTypes = {
    joinusministrycard: PropTypes.shape({
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      select: PropTypes.string,
    }).isRequired,
  };

export default JoinUsMinistryCard;