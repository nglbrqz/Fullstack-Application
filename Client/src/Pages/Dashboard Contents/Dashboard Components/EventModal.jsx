import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import "../Dashboard Component Styles/EventModal.css";
import EventList from "../Attendees List/EventList";

const EventModal = ({ onClose, event, eventId }) => {
  const [isEventListOpen, setIsEventListOpen] = useState(false); // State to control EventList modal visibility

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClose]);

  const toggleEventListModal = () => {
    setIsEventListOpen(!isEventListOpen);
  };

  return (
    <>
      <div className="event-modal-content">
        <div className="event-modal-content-wrapper">
          <div className="event-modal-image-container">
            <img
              src={event.eventThumbnailImageUrl}
              alt={event.eventTitle}
              className="event-modal-image"
            />
          </div>
          <div className="event-modal-content-container">
            <div className="event-modal-content-container-wrapper">
              <div className="event-modal-icons">
                <div className="icon-container" onClick={onClose}>
                  <FontAwesomeIcon icon={faClose} />
                </div>
              </div>
              <div className="event-information">
                <h2 className="event-modal-title">{event.eventTitle}</h2>
                <p className="event-modal-date">
                  Date: {new Date(event.eventDate).toLocaleDateString()}
                </p>
                <p className="event-modal-time">
                  Time: {event.eventStartTime} - {event.eventEndTime}
                </p>
                <p className="event-modal-host">Host: {event.eventHost}</p>
                <p className="event-modal-location">
                  Location: {event.eventLocation}
                </p>
                <p className="event-modal-description">
                  {event.eventDescription}
                </p>
                <div className="event-modal-button-container">
                  <button
                    className="event-modal-display-volunteers-button"
                    onClick={toggleEventListModal}
                  >
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

      <Modal isOpen={isEventListOpen} onRequestClose={toggleEventListModal}>
        <EventList
          event={event}
          eventId={eventId}
          onClose={toggleEventListModal}
        />
      </Modal>
    </>
  );
};

EventModal.propTypes = {
  isEventOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
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
  eventId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EventModal;
