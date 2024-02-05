import { useEffect } from "react";
import NavBar from "../Components/navBar";
import Footer from "../Components/Footer";
import "./Page Styles/Events.css";
import ChurchEventContainer from "../Components/Component Styles/Timeline/EventContainer";
const Events = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="prayer-header-container">
        <NavBar />

        <div className="prayer-text-container">
          <h1 className="prayer-title">EVENTS</h1>
        </div>
      </div>

      <div className="event-church-events-container">
        <ChurchEventContainer />
      </div>

      <div className="event-footer-container">
        <Footer />
      </div>
    </>
  );
};

export default Events;
