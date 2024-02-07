import "./Timeline Style/TimelineCard.css";
import PropTypes from "prop-types";


const EventTimelineCard = ({ event, onClick }) => {
  const handleClick = () => {
    onClick(event); // Pass the clicked event to the onClick function
  };

  const formatEventDate = (fullDate) => {
    const date = new Date(fullDate);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const limitDescription = (description, wordLimit) => {
    const words = description.split(' ');
    const limitedDescription = words.slice(0, wordLimit).join(' ');
    return words.length > wordLimit ? `${limitedDescription}...` : limitedDescription;
  };
 

  return (
    <div className="timeline-card" onClick={handleClick}> 
      <div className="timeline-wrapper">
        <div className="timeline-date-container">
          <h2>{formatEventDate(event.eventDate)}</h2>
        </div>
        <div className="timeline-text">
          <div className="timeline-title">{event.eventTitle}</div>
          <div className="timeline-description">
            {limitDescription(event.eventDescription, 40)}
          </div>
        </div>
      </div>
    </div>
  );
};

EventTimelineCard.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    eventThumbnailImageUrl: PropTypes.string.isRequired,
    eventTitle: PropTypes.string.isRequired,
    eventCategory: PropTypes.oneOf(["church", "outreach"]).isRequired,
    eventDate: PropTypes.string.isRequired,
    eventStartTime: PropTypes.string.isRequired,
    eventEndTime: PropTypes.string.isRequired,
    eventDescription: PropTypes.string.isRequired,
    eventHost: PropTypes.string.isRequired,
    eventLocation: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired, // onClick event handler function is required
};

export default EventTimelineCard;
