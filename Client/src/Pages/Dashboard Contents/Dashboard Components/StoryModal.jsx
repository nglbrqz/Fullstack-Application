// StoryModal.js
import PropTypes from "prop-types";
import "../Dashboard Component Styles/Confirmation.css";
 

const StoryModal = ({ isOpen, onClose, storyText }) => {
  return (
    <div className={`storymodal-modal ${isOpen ? "open" : ""}`}>
      <div className="storymodal-modal-content">
        <p>{storyText}</p>
        <div className="storymodal-button-wrapper">
        <button className="storymodal-close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

StoryModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    storyText: PropTypes.func.isRequired,
  };
  

export default StoryModal;
