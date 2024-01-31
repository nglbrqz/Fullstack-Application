import "./Dashboard Style/Event.css";
import { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../../Components/Dashboard Cards/EventCard";


const EventsContent = () => {
  const [churchEvents, setChurchEvents] = useState([]);
  const [outreachEvents, setOutreachEvents] = useState([]);
 

  useEffect(() => {
    axios.get("/event/getevents")
      .then((response) => {
        if (
          response.data &&
          response.data.churchEvents &&
          Array.isArray(response.data.churchEvents) &&
          response.data.outreachEvents &&
          Array.isArray(response.data.outreachEvents)
        ) {
          // Filter out archived events before setting state
          setChurchEvents(
            response.data.churchEvents.filter((event) => !event.isEventArchived)
          );
          setOutreachEvents(
            response.data.outreachEvents.filter((event) => !event.isEventArchived)
          );
        } else {
          console.error("Invalid event data received from backend");
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="event-header-container">
        <h1 className="event-header-title">EVENTS</h1>
        <button className="event-header-add-event-button">ADD EVENTS</button>
      </div>

      <div className="church-event-container">
        <div className="event-category-header-wrapper">
          <h2 id="church-events-heading">Church Events</h2>
        </div>
        <div className="church-event-wrapper">
          {churchEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>

      <div className="outreach-event-container">
        <div className="event-category-header-wrapper">
          <h2 id="outreach-events-heading">Outreach Events</h2>
        </div>

        <div className="outreach-event-wrapper">
          {outreachEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>



    </>
  );
};

export default EventsContent;