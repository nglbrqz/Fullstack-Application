import "../Dashboard Cards/Dashboard Card Styles/EventCard.css"; // Import the stylesheet
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"; // Corrected import statement
const EventCard = ({ event }) => {
  const formattedDate =
    event.eventDate.substring(5, 7) +
    "/" +
    event.eventDate.substring(8, 10) +
    "/" +
    event.eventDate.substring(0, 4);

  return (
    <div className="event-card">
      <div className="event-card-img">
        <img
          src={event.eventThumbnailImageUrl}
          className="event-card-image"
          alt={event.eventTitle}
        />
      </div>
      <div className="event-icons">
        <div className="icon-container">
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faArchive} />
        </div>
      </div>
      <div className="event-card-info">
        <div className="event-card-text">
          <p className="event-text-title">{event.eventTitle}</p>
          <p className="event-text-details">{formattedDate} </p>
        </div>
        <div className="event-card-button">
          {/* Replace this with your button functionality or component */}
          <svg viewBox="0 0 28 25" className="event-icon">
            <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    eventThumbnailImageUrl: PropTypes.string.isRequired,
    eventTitle: PropTypes.string.isRequired,
    eventCategory: PropTypes.oneOf(["church", "outreach"]).isRequired,
    eventDate: PropTypes.string.isRequired,
    eventStartTime: PropTypes.string.isRequired,
    eventEndTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
