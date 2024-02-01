 
import PropTypes from "prop-types";
import "../Dashboard Component Styles/Confirmation.css";

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <div className={`confirmationmodal ${isOpen ? "open" : ""}`}>
      <div className="confirmation-modal-content">
        <p>Are you sure you want to proceed with this action?</p>
        <div className="confirmation-modal-wrapper"> 
        <button className="confirmation-modal-wrapper-decline-button" onClick={onCancel}>Cancel</button>
        <button className="confirmation-modal-wrapper-confirm-button" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmationModal;
