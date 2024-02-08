import { useNavigate } from "react-router-dom";
import "./Timeline Style/TimelineModal.css";
import PropTypes from "prop-types";

const EventTimelineModal = ({ event, isOpen, closeModal }) => {
  const navigate = useNavigate(); 

  if (!isOpen || !event) return null;

  const formatEventDate = (fullDate) => {
    const date = new Date(fullDate);
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  };

  const formatEventTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    const options = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleTimeString("en-US", options);
  };

  const handleJoinClick = () => {
    closeModal();
    navigate("/registrationevent", { state: { event: event, eventId: event._id } }); 
  
  };

  return (
    <div className="event-timeline-modal-container">
      <div className="event-timeline-modal-wrapper">
        <div className="event-timeline-image-container">
          <img src={event.eventThumbnailImageUrl} alt={event.eventTitle} />
        </div>
        <div className="event-timeline-header-container">
          <h2>{event.eventTitle}</h2>
          <h4>Host Name: {event.eventHost}</h4>
          <h4>Category: {event.eventCategory}</h4>
        </div>
        <div className="event-timeline-description-container">
          <p>Date: {formatEventDate(event.eventDate)}</p>
          <p>
            Time: {formatEventTime(event.eventStartTime)} -{" "}
            {formatEventTime(event.eventEndTime)}
          </p>
          <p id="event-desc">{event.eventDescription}</p>
        </div>
        <div className="event-timeline-button-container">
          <button onClick={closeModal}>Close</button>
          <button onClick={handleJoinClick}>Join</button>
        </div>
      </div>
    </div>
  );
};

EventTimelineModal.propTypes = {
  event: PropTypes.shape({
    eventThumbnailImageUrl: PropTypes.string.isRequired,
    eventTitle: PropTypes.string.isRequired,
    eventHost: PropTypes.string.isRequired,
    eventCategory: PropTypes.string.isRequired,
    eventDate: PropTypes.string.isRequired,
    eventStartTime: PropTypes.string.isRequired,
    eventEndTime: PropTypes.string.isRequired,
    eventDescription: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired, // Include _id in event propTypes
  }).isRequired,
  eventId: PropTypes.string.isRequired, // Add eventId prop type
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};


export default EventTimelineModal;
