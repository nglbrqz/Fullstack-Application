 
import PropTypes from "prop-types";
import "./Component Styles/DeleteConfirmation.css";

const DeleteConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <div className={`deleteconfirmationmodal ${isOpen ? "open" : ""}`}>
      <div className="deleteconfirmation-modal-content">
        <p>Are you sure you want to delete this entry?</p>
        <div className="deleteconfirmation-modal-wrapper"> 
        <button className="deleteconfirmation-modal-wrapper-decline-button" onClick={onCancel}>Cancel</button>
        <button className="deleteconfirmation-modal-wrapper-confirm-button" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

DeleteConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default DeleteConfirmationModal;
