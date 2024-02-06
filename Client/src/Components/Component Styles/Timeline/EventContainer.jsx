import { useEffect, useState } from "react";
import EventTimelineCard from "./EventTimelineCard";
import "./Timeline Style/ChurchEventContainer.css";
import axios from "axios";
import Modal from "react-modal";
import EventTimelineModal from "./EventTimelineModal";

const ChurchEventContainer = () => {
  const [churchEvents, setChurchEvents] = useState([]);
  const [nearestEvent, setNearestEvent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/event/getevents")
      .then((response) => {
        if (
          response.data &&
          response.data.churchEvents &&
          Array.isArray(response.data.churchEvents)
        ) {
          const unarchivedEvents = response.data.churchEvents.filter(
            (event) => !event.isEventArchived
          );

          setChurchEvents(unarchivedEvents);

          // Find the nearest event
          const now = new Date().getTime();
          const nearest = unarchivedEvents.reduce((nearest, event) => {
            const eventDate = new Date(event.date).getTime();
            return eventDate >= now && eventDate < new Date(nearest.date).getTime()
              ? event
              : nearest;
          }, unarchivedEvents[0]);

          setNearestEvent(nearest);
        } else {
          console.error("Invalid event data received from backend");
        }
      })
      .catch((error) => console.error(error));
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

                <button onClick={openModal}>View Details</button>

              
              </div>
            )}
          </div>

          <div className="Church-event-timeline-card-container">
            {churchEvents.map((event) => (
              <EventTimelineCard key={event._id} event={event} onClick={openModal} />
            ))}
          </div>
        </div>
      </div>

        {/* Modal for event details */}
        <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Event Details"
                >
                  <EventTimelineModal event={nearestEvent} closeModal={closeModal} />
                </Modal>
    </>
  );
};

export default ChurchEventContainer;
