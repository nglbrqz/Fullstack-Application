import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../Dashboard Component Styles/CreateEvent.css";
import { toast } from "react-hot-toast";

const EditEvents = ({ closeModal, formData, eventId, onEditSuccess   }) => {
  const [editFormData, setEditFormData] = useState({
    eventTitle: "",
    eventDate: "",
    eventStartTime: "",
    eventEndTime: "",
    eventCategory: "",
    eventDescription: "",
    eventHost: "",
    eventLocation: "",
 
  });

  useEffect(() => {
    // Update the state with the formData when it changes
    setEditFormData({
      ...editFormData,
      ...formData,
    });
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/event/editEvent/${eventId}`, editFormData);
      console.log(response.data.message);

      // Notify success
      toast.success('Event edited successfully');
      
      // Call the onEditSuccess callback if provided
      if (onEditSuccess) {
        onEditSuccess();
      }

      setIsModalOpen(false);
      closeModal();
    } catch (error) {
      console.error('Error updating event:', error);

      // Notify error
      toast.error('Error updating event. Please try again.');
    }
  };
  
  


  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen && (
        <div className="create-event-form-container">
          <form onSubmit={handleSubmit}>
            <div className="create-event-form-container-wrapper">
              <div className="create-event-form-container-column-wrapper">
                <div>
                  <textarea
                    placeholder="Description..."
                    name="eventDescription"
                    value={editFormData.eventDescription}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        eventDescription: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>

              <div className="create-event-form-container-column-wrapper">
                <div className="create-event-input-title">
                  <label htmlFor="create-event-title-input">Event Title:</label>
                  <input
                    type="text"
                    name="eventTitle"
                    id="create-event-title-input"
                    value={editFormData.eventTitle}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        eventTitle: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="create-event-input-wrapper">
                  <label htmlFor="eventDate">Schedule:</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={editFormData.eventDate}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        eventDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="create-event-input-wrapper">
                  <label htmlFor="startTime">Start Time:</label>
                  <input
                    type="time"
                    name="startTime"
                    value={editFormData.eventStartTime}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        eventStartTime: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="create-event-input-wrapper">
                  <label htmlFor="endTime">End Time:</label>
                  <input
                    type="time"
                    name="endTime"
                    value={editFormData.eventEndTime}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        eventEndTime: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="create-event-input-wrapper">
                  <label htmlFor="eventCategory">Category:</label>
                  <select
                    name="eventCategory"
                    value={editFormData.eventCategory}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        eventCategory: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Category</option>
                    <option value="church">Church</option>
                    <option value="outreach">Outreach</option>
                  </select>
                </div>
                <div className="create-event-input-wrapper">
                  <label htmlFor="eventHost">Event Host:</label>
                  <input
                    type="text"
                    name="eventHost"
                    value={editFormData.eventHost}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        eventHost: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="create-event-input-wrapper">
                  <label htmlFor="eventLocation">Event Location:</label>
                  <input
                    type="text"
                    name="eventLocation"
                    value={editFormData.eventLocation}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        eventLocation: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="create-event-form-button-wrapper">
              <button className="create-event-form-button" type="submit">
                Edit Event
              </button>
              <button className="create-event-form-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

EditEvents.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  eventId: PropTypes.string.isRequired,
  formData: PropTypes.shape({
    eventTitle: PropTypes.string,
    eventDate: PropTypes.string,
    eventStartTime: PropTypes.string,
    eventEndTime: PropTypes.string,
    eventCategory: PropTypes.string,
    eventDescription: PropTypes.string,
    eventHost: PropTypes.string,
    eventLocation: PropTypes.string,
   
  }),
  onEditSuccess: PropTypes.func,
};


export default EditEvents;
