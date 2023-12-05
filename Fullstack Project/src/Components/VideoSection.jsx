import React from "react";
import "./style.css";

const VideoSection = ({ videoId, title, textAbove }) => {
    return (
      <section className="video-section">
        <div className="text-above">
          <h2>{textAbove}</h2>
        </div>
        <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    );
  };

export default VideoSection;
