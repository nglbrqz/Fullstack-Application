import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { toast } from "react-hot-toast";
import "../Dashboard Component Styles/EventModal.css";
import { faEdit, faTrashAlt, faClose } from "@fortawesome/free-solid-svg-icons";

import ConfirmationModal from "./ConfirmationModal";

const EventModal = ({
  isEventOpen,
  onEventClose,
   event,
  onDelete,
}) => {
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        onEventClose();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onEventClose]);

  if (!isEventOpen || !event) {
    return null;
  }

  // OPEN MODALS

  const handleDeleteClick = (id) => {
    setSelectedRequestId(id);
    setDeleteModalOpen(true);
    setIsModalOpen(false);

  };

  const handleDeleteCancel = (e) => {
    e.stopPropagation();
    setSelectedRequestId(null);
    setDeleteModalOpen(false);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await axios.delete(
        `/event/deleteeventid/${selectedRequestId}`
      );
      toast.success(response.data.message);
      onDelete(selectedRequestId);
      setDeleteModalOpen(false);
    } catch (error) {
      toast.error("Error deleting event");
    }
  };

  const {
    eventThumbnailImageUrl,
    eventTitle,
    eventDate,
    eventStartTime,
    eventEndTime,
    eventDescription,
    eventHost,
    eventLocation,
  } = event;

  return (
    <>
      {isModalOpen && (
        <div className="event-modal-overlay" onClick={onEventClose}>
          <div
            className="event-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="event-modal-content-wrapper">
              <div className="event-modal-image-container">
                <img
                  src={eventThumbnailImageUrl}
                  alt={eventTitle}
                  className="event-modal-image"
                />
              </div>

              <div className="event-modal-content-container">
                <div className="event-modal-content-container-wrapper">
                  <div className="event-modal-icons">
                    <div className="icon-container">
                      <FontAwesomeIcon icon={faEdit} />
                    </div>
                    <div
                      className="icon-container"
                      onClick={() => handleDeleteClick(event._id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </div>

                    <div className="icon-container" onClick={onEventClose}>
                      <FontAwesomeIcon icon={faClose} />
                    </div>
                  </div>
                  <div className="event-information">
                    <h2 className="event-modal-title">{eventTitle}</h2>
                    <p className="event-modal-date">
                      Date: {new Date(eventDate).toLocaleDateString()}
                    </p>
                    <p className="event-modal-time">
                      Time: {eventStartTime} - {eventEndTime}
                    </p>
                    <p className="event-modal-host">Host: {eventHost}</p>
                    <p className="event-modal-location">
                      Location: {eventLocation}
                    </p>
                    <p className="event-modal-description">
                      {eventDescription}
                    </p>

                    <div className="event-modal-button-container">
                      <button className="event-modal-display-volunteers-button">
                        <span className="event-modal-display-volunteers-button-span">
                          {" "}
                          VIEW PARTICIPANTS
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ConfirmationModal
            isOpen={isDeleteModalOpen}
            onCancel={handleDeleteCancel}
            onConfirm={handleDeleteConfirm}
          />
        </div>
      )}
    </>
  );
};

EventModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isEventOpen: PropTypes.bool.isRequired,
  onEventClose: PropTypes.func.isRequired,
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    eventThumbnailImageUrl: PropTypes.string.isRequired,
    eventTitle: PropTypes.string.isRequired,
    eventDate: PropTypes.string.isRequired,
    eventStartTime: PropTypes.string.isRequired,
    eventEndTime: PropTypes.string.isRequired,
    eventDescription: PropTypes.string.isRequired,
    eventHost: PropTypes.string.isRequired,
    eventLocation: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,

};

export default EventModal;
