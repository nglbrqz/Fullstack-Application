import PropTypes from "prop-types";
import "../Dashboard Component Styles/ViewParticipantsModal.css";
import { Link } from "react-router-dom";

const ViewConnectModal = ({ isConnectModalOpen, onEventClose, event  }) => {
  if (!isConnectModalOpen || !event) {
    return null;
  }

  const {
    connectgroupActivityName,
    connectgroupActivityDescription,
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
                <h2 className="vp-modal-title">{connectgroupActivityName}</h2>
                <div className="vp-modal-description-container">
                  <p className="vp-modal-description">
                    Description: {connectgroupActivityDescription}
                  </p>
                </div>
                <div className="vp-modal-button-container">
                  <Link 
                    to={"/ConnectgroupList"}
                    state={{ connectgroupActivityName: connectgroupActivityName }}>
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

ViewConnectModal.propTypes = {
    isConnectModalOpen: PropTypes.bool.isRequired,
    onEventClose: PropTypes.func.isRequired,
    connectgroupActivities: PropTypes.array.isRequired,
    event: PropTypes.shape({
        connectgroupActivityId: PropTypes.number.isRequired,
        connectgroupActivityName: PropTypes.string.isRequired,
        connectgroupActivityDescription: PropTypes.string.isRequired,
    }).isRequired,
  };

export default ViewConnectModal;
