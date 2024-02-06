import PropTypes from "prop-types";
import "../Dashboard Component Styles/ViewParticipantsModal.css";
import { Link } from "react-router-dom";

const ViewParticipantsModal = ({ isVPModalOpen, onEventClose, event  }) => {
  if (!isVPModalOpen || !event) {
    return null;
  }

  const {
    volunteerActivityId,
    volunteerActivityName,
    volunteerActivityDescription,
  } = event;

  return (
    <div className="vp-modal-overlay" onClick={onEventClose}>
      <div className="vp-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="vp-modal-content-wrapper">
          {/* <div className="event-modal-image-container">
            <img
              src={eventThumbnailImageUrl}
              alt={eventTitle}
              className="event-modal-image"
            />
          </div> */}

          <div className="vp-modal-content-container">
            <div className="vp-modal-content-container-wrapper">
              <div className="vp-information">
                <h2 className="vp-modal-title">{volunteerActivityName}</h2>
                <div className="vp-modal-description-container">
                  <p className="vp-modal-description">
                    Description: {volunteerActivityDescription}
                  </p>
                </div>
                <div className="vp-modal-button-container">
                  {/* <Link to="/VolunteersList"> */}
                  <Link 
                    to={"/VolunteersList"}
                    state={{ volunteerActivityName: volunteerActivityName }}>
                    <button className="vp-modal-display-volunteers-button">
                      <span className="vp-modal-display-volunteers-button-span">VIEW PARTICIPANTS</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ViewParticipantsModal.propTypes = {
    isVPModalOpen: PropTypes.bool.isRequired,
    onEventClose: PropTypes.func.isRequired,
    volunteerActivities: PropTypes.array.isRequired,
    event: PropTypes.shape({
      volunteerActivityId: PropTypes.number.isRequired,
      volunteerActivityName: PropTypes.string.isRequired,
      volunteerActivityDescription: PropTypes.string.isRequired,
    }).isRequired,
  };

export default ViewParticipantsModal;
