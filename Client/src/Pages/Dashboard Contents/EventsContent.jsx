import "./Dashboard Style/Event.css";
import { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../Dashboard Contents/Dashboard Components/EventCard";
import CreateEvents from "./CreateEvents";
import Modal from "react-modal";
import { customModalStyles } from "./Dashboard Style/DashboardModalStyle";

const EventsContent = () => {
  const [churchEvents, setChurchEvents] = useState([]);
  const [outreachEvents, setOutreachEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = (deletedRequestId) => {
    setChurchEvents(
      churchEvents.filter((event) => event._id !== deletedRequestId)
    );
    setOutreachEvents(
      outreachEvents.filter((event) => event._id !== deletedRequestId)
    );
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleArchive = (archivedEventId) => {
    setChurchEvents(
      churchEvents.filter((event) => event._id !== archivedEventId)
    );
    setOutreachEvents(
      outreachEvents.filter((event) => event._id !== archivedEventId)
    );
  };

  //Acquiring Data from the database

  useEffect(() => {
    axios
      .get("/event/getevents")
      .then((response) => {
        if (
          response.data &&
          response.data.churchEvents &&
          Array.isArray(response.data.churchEvents) &&
          response.data.outreachEvents &&
          Array.isArray(response.data.outreachEvents)
        ) {
          setChurchEvents(
            response.data.churchEvents.filter((event) => !event.isEventArchived)
          );
          setOutreachEvents(
            response.data.outreachEvents.filter(
              (event) => !event.isEventArchived
            )
          );
        } else {
          console.error("Invalid event data received from backend");
        }
      })
      .catch((error) => console.error(error));
  }, []);

  //

  const handleCreateEventSuccess = () => {
    axios
      .get("/event/getevents")
      .then((response) => {
        if (
          response.data &&
          response.data.churchEvents &&
          Array.isArray(response.data.churchEvents) &&
          response.data.outreachEvents &&
          Array.isArray(response.data.outreachEvents)
        ) {
          setChurchEvents(
            response.data.churchEvents.filter((event) => !event.isEventArchived)
          );
          setOutreachEvents(
            response.data.outreachEvents.filter(
              (event) => !event.isEventArchived
            )
          );
        } else {
          console.error("Invalid event data received from backend");
        }
      })
      .catch((error) => console.error(error));
  };
  const handleEditSuccess = () => {
    // Implement the logic to refresh the content after editing
    // For example, you can refetch the events from the backend
    // and update the state.

    axios
      .get("/event/getevents")
      .then((response) => {
        if (
          response.data &&
          response.data.churchEvents &&
          Array.isArray(response.data.churchEvents) &&
          response.data.outreachEvents &&
          Array.isArray(response.data.outreachEvents)
        ) {
          setChurchEvents(
            response.data.churchEvents.filter((event) => !event.isEventArchived)
          );
          setOutreachEvents(
            response.data.outreachEvents.filter(
              (event) => !event.isEventArchived
            )
          );
        } else {
          console.error("Invalid event data received from backend");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="event-header-container">
        <h1 className="event-header-title">EVENTS</h1>
        <button className="event-header-add-event-button" onClick={openModal}>
          ADD EVENTS
        </button>
      </div>

      <div className="church-event-container">
        <div className="event-category-header-wrapper">
          <h2 id="church-events-heading">Church Events</h2>
        </div>
        <div className="church-event-wrapper"> 
          {churchEvents.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              onDelete={handleDelete}
              onArchive={handleArchive}
              onEditSuccess={handleEditSuccess}
            />
          ))}
        </div>
      </div>

      <div className="outreach-event-container">
        <div className="event-category-header-wrapper">
          <h2 id="outreach-events-heading">Outreach Events</h2>
        </div>

        <div className="outreach-event-wrapper">

          {/* Use this reference */}
          {outreachEvents.map((event) => (
            <EventCard
              key={event._id}
              event={event}




              onDelete={handleDelete}
              onArchive={handleArchive}
              onEditSuccess={handleEditSuccess}
            />
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create Events Modal"
        style={customModalStyles}
      >
        <div>
          <CreateEvents
            onCloseModal={closeModal}
            closeModal={closeModal}
            onCreateEventSuccess={handleCreateEventSuccess}
          />{" "}
        </div>
      </Modal>
    </>
  );
};

export default EventsContent;
