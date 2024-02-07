import { useEffect, useState } from "react";
import EventTimelineCard from "./EventTimelineCard";
import "./Timeline Style/ChurchEventContainer.css";
import axios from "axios";
import Modal from "react-modal";
import EventTimelineModal from "./EventTimelineModal";
import { customModalStyles } from "../../../Pages/Dashboard Contents/Dashboard Style/DashboardModalStyle";

const ChurchEventContainer = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [nearestEvent, setNearestEvent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    setSelectedEvent(event); // Set the selected event
    setModalIsOpen(true); // Open the modal
  };

  const fetchEvents = () => {
    axios
      .get("/event/getallevents") // Using the new API endpoint
      .then((response) => {
        if (response.data && Array.isArray(response.data.allEvents)) {
          const unarchivedEvents = response.data.allEvents.filter(
            (event) => !event.isEventArchived
          );

          setAllEvents(unarchivedEvents);

          // Find the nearest event
          const now = new Date().getTime();
          const nearest = unarchivedEvents.reduce((nearest, event) => {
            const eventDate = new Date(event.date).getTime();
            return eventDate >= now &&
              eventDate < new Date(nearest.date).getTime()
              ? event
              : nearest;
          }, unarchivedEvents[0]);

          setNearestEvent(nearest);
        } else {
          console.error("Invalid event data received from backend");
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchEvents(); // Initial fetch

    const interval = setInterval(fetchEvents, 60000); // Fetch every 60 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, []);

  const formatEventDate = (fullDate) => {
    const date = new Date(fullDate);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="Church-event-container">
        <div className="Church-event-wrapper">
          <div className="Church-event-selected-event-container">
            {nearestEvent && (
              <div className="Church-event-selected-event-image-container">
                <h1 className="Church-event-selected-event-date-container">
                  {formatEventDate(nearestEvent.eventDate)}
                </h1>

                <img
                  src={nearestEvent.eventThumbnailImageUrl}
                  alt={nearestEvent.eventTitle}
                />

                <button onClick={() => openModal(nearestEvent)}>
                  View Details
                </button>
              </div>
            )}
          </div>

          <div className="Church-event-timeline-card-container">
            {allEvents.map((event) => (
              <EventTimelineCard
                key={event._id}
                event={event}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for event details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Event Details"
        style={customModalStyles}
      >
        {/* Pass selectedEvent and modalIsOpen as props */}
        <EventTimelineModal
          event={selectedEvent}
          closeModal={closeModal}
          isOpen={modalIsOpen}
        />
      </Modal>
    </>
  );
};

export default ChurchEventContainer;
