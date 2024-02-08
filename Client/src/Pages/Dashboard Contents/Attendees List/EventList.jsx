import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ConfirmationModal from "../Dashboard Components/ConfirmationModal";
import axios from "axios";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-hot-toast";
import "./Attendees Style/AttendeesStyle.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const EventList = ({ event, eventId, onClose }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [volunteers, setVolunteers] = useState([]);
  const [volunteerToDelete, setVolunteerToDelete] = useState(null);

  useEffect(() => {
    if (eventId) {
      const fetchVolunteers = async () => {
        try {
          const response = await axios.get(
            `/eventvolunteer/volunteers/${eventId}`
          );
          setVolunteers(response.data);
        } catch (error) {
          console.error("Error fetching volunteers:", error);
        }
      };

      fetchVolunteers();
    }
  }, [eventId]);

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
        `/eventvolunteer/deleteEventVolunteer/${volunteerToDelete._id}`
      );
      toast.success("Volunteer deleted successfully");
      setDeleteModalOpen(false);
      setVolunteers(
        volunteers.filter(
          (volunteer) => volunteer._id !== volunteerToDelete._id
        )
      );
    } catch (error) {
      console.error("Error deleting volunteer:", error);
      toast.error("Failed to delete volunteer");
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
  };

  const openDeleteConfirmation = (volunteer) => {
    setVolunteerToDelete(volunteer);
    setDeleteModalOpen(true);
  };

  return (
    <>
      <div className="eventlist-header-wrapper">
        <h2>{event.eventTitle}</h2>
        <div className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          </div>

        <div className="volunteers-table">
          

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((volunteer) => (
                <tr key={volunteer._id}>
                  <td>{volunteer.name}</td>
                  <td>{volunteer.age}</td>
                  <td>{volunteer.sex}</td>
                  <td>{volunteer.email}</td>
                  <td>{volunteer.contactNo}</td>
                  <td>
                    <div
                      className="dashboard-table-icon"
                      id="delete-icon"
                      onClick={() => openDeleteConfirmation(volunteer)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
 

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
};

EventList.propTypes = {
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
};
export default EventList;
