import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Dropzone from "react-dropzone";
import "./Dashboard Style/CreateEvent.css";

const CreateEvents = () => {
  const [eventDetails, setEventDetails] = useState({
    eventTitle: "",
    eventDate: "",
    eventStartTime: "",
    eventEndTime: "",
    eventCategory: "",
    eventDescription: "",
    eventHost: "",
    eventLocation: "",
  });
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleThumbnailDrop = (acceptedFiles) => {
    // Only consider the first file if multiple files are selected
    const file = acceptedFiles[0];
    setThumbnailFile(file || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check other required fields
      const requiredFields = [
        "eventTitle",
        "eventDate",
        "eventStartTime",
        "eventEndTime",
        "eventCategory",
        "eventDescription",
        "eventHost",
        "eventLocation",
      ];

      const missingFields = requiredFields.filter(
        (field) => !eventDetails[field] || eventDetails[field].trim() === ""
      );

      if (missingFields.length > 0) {
        return toast.error(
          `Please provide a value for the following fields: ${missingFields.join(
            ", "
          )}`
        );
      }

      // Check if a thumbnail file is selected
      if (!thumbnailFile) {
        return toast.error("Please upload an event thumbnail image.");
      }

      // Upload the thumbnail file
      const formData = new FormData();
      formData.append("thumbnail", thumbnailFile);

      const thumbnailResponse = await axios.post(
        "/event/uploadThumbnail",
        formData
      );

      // Get the uploaded thumbnail path
      const thumbnailPath = thumbnailResponse.data.path;

      // Submit the rest of the form data along with the thumbnail path
      const response = await axios.post("/event/createevent", {
        ...eventDetails,
        eventThumbnailImageUrl: thumbnailPath,
      });

      // Display success toast
      toast.success("Event created successfully!");

      // Clear the uploaded image and form fields
      setThumbnailFile(null);
      setEventDetails({
        eventTitle: "",
        eventDate: "",
        eventStartTime: "",
        eventEndTime: "",
        eventCategory: "",
        eventDescription: "",
        eventHost: "",
        eventLocation: "",
      });

      // Optionally, you can log the response from the server
      console.log(response.data);
    } catch (error) {
      // Display error toast
      toast.error("Error creating event. Please try again.");
    }
  };

  return (
    <div>
      <h2>Create Events</h2>
      <div className="create-event-form-container">
        <form onSubmit={handleSubmit}>
          <div className="create-event-form-container-wrapper">
            <div className="create-event-form-container-column-wrapper">
              {/* Thumbnail dropzone */}
              <Dropzone onDrop={handleThumbnailDrop} accept="image/*">
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps()}
                    className="create-event-form-thumbnail-import"
                  >
                    <input {...getInputProps()} />
                    <p>
                      {thumbnailFile
                        ? `File: ${thumbnailFile}`
                        : "Drag and drop an event thumbnail image here, or click to select one"}
                    </p>
                  </div>
                )}
              </Dropzone>

              <div>
                <textarea
                  placeholder="Description..."
                  name="eventDescription"
                  value={eventDetails.eventDescription}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

            <div className="create-event-form-container-column-wrapper">
              <div className="create-event-input-title">
                <label>Event Title:</label>
                <input
                  type="text"
                  name="eventTitle"
                  id="create-event-title-input"
                  value={eventDetails.eventTitle}
                  onChange={handleInputChange}
                />
              </div>
              <div className="create-event-input-wrapper">
                <label>Schedule:</label>
                <input
                  type="date"
                  name="eventDate"
                  value={eventDetails.eventDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="create-event-input-wrapper">
                <label>Start Time:</label>
                <input
                  type="time"
                  name="eventStartTime"
                  value={eventDetails.eventStartTime}
                  onChange={handleInputChange}
                />
              </div>
              <div className="create-event-input-wrapper">
                <label>End Time:</label>
                <input
                  type="time"
                  name="eventEndTime"
                  value={eventDetails.eventEndTime}
                  onChange={handleInputChange}
                />
              </div>
              <div className="create-event-input-wrapper">
                <label>Category:</label>
                <select
                  name="eventCategory"
                  value={eventDetails.eventCategory}
                  onChange={handleInputChange}
                >
                  <option value="">Select Category</option>
                  <option value="church">Church</option>
                  <option value="outreach">Outreach</option>
                </select>
              </div>
              <div className="create-event-input-wrapper">
                <label>Event Host:</label>
                <input
                  type="text"
                  name="eventHost"
                  value={eventDetails.eventHost}
                  onChange={handleInputChange}
                />
              </div>
              <div className="create-event-input-wrapper">
                <label>Event Location:</label>
                <input
                  type="text"
                  name="eventLocation"
                  value={eventDetails.eventLocation}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="create-event-form-button-wrapper">
            <button className="create-event-form-button" type="submit">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvents;
