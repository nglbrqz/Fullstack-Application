import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Modals.css";

const JoinUsModal = ({ joinusmodal, closeModal, joinLink, source }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal-video-container" onClick={stopPropagation}>
      {source === 'volunteer' ? (
        <img src={joinusmodal.imageUrl || ""} alt="Volunteer Image" />
      ) : (
        <iframe
          className="modal-video"
          src={joinusmodal.videoUrl || ""}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
        <div className="modal-overlay-wrapper">
          <div className="modal-text-block">
            <h2>{joinusmodal.title || "Default Category Title"}</h2>
            <p>{joinusmodal.description || "Default Category Description"}</p>
          </div>
          <Link to={joinLink || "/default-join-page"}>
          <button className="modal-join-btn">Join Now</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

JoinUsModal.propTypes = {
  joinusmodal: PropTypes.shape({
    videoUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  joinLink: PropTypes.string,
};

export default JoinUsModal;
