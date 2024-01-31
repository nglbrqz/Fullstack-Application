import { useState } from "react";

import "../Dashboard Cards/Dashboard Card Styles/EventCard.css"; // Import the stylesheet
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faEdit,
  faTrashAlt,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"; // Corrected import statement
import { toast } from "react-hot-toast";
import DeleteConfirmationModal from "../../Components/DeleteConfirmationModal";

const EventCard = ({ event }) => {
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteClick = (id) => {
    setSelectedRequestId(id);
    setDeleteModalOpen(true);
  };

  const handleDeleteCancel = () => {
    setSelectedRequestId(null);
    setDeleteModalOpen(false);
  };
  const handleDeleteConfirm = async () => {
    try {
      // Make a delete request using axios
      const response = await axios.delete(`/event/deleteeventid/${selectedRequestId}`);

      // Handle success
      toast.success(response.data.message);

      setDeleteModalOpen(false);

     } catch (error) {
       toast.error("Error deleting event");
    }
  };
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
        <div
          className="icon-container"
   
          onClick={() => handleDeleteClick(event._id)}
        >
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

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    eventThumbnailImageUrl: PropTypes.string.isRequired,
    eventTitle: PropTypes.string.isRequired,
    eventCategory: PropTypes.oneOf(["church", "outreach"]).isRequired,
    eventDate: PropTypes.string.isRequired,
    eventStartTime: PropTypes.string.isRequired,
    eventEndTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
