import "../Pages/Page Styles/JoinUs.css";
import NavBar from "../Components/navBar";
import Footer from "../Components/Footer";
import MinistryCard from "../Components/MinistryCard";
import ministriesData from "../JSON Data/ministries.json";
import VolunteerCard from "../Components/VolunteerCard";
const JoinUs = () => {
  return (
    <>
      <div className="join-us-header-container">
        <NavBar />
      </div>

      <div className="join-us-main-section">
        <div className="main-section-wrapper">
          <div className="main-section-title">
            <h1>Join Us</h1>
          </div>
          <div className="main-section-image-container">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="join-us-ministry-section">
        <div className="ministry-title-container">
          <h1>MINISTRIES</h1>
        </div>

        <div className="ministry-wrapper">
          {ministriesData.map((ministry) => (
            <MinistryCard key={ministry.ministryid} data={ministry} />
          ))}
        </div>
      </div>

      <div className="join-us-volunteer-section">
        <div className="volunteer-title-container">
          <h1>MINISTRIES</h1>
        </div>

        <div className="volunteer-wrapper">
          <VolunteerCard className="volunteer-card" />
     
        </div>
      </div>

      <div className="join-us-connect-group-section">
        <div className="ministry-title-container">
          <h1>MINISTRIES</h1>
        </div>

        <div className="connect-group-wrapper"></div>
      </div>

      <div className="prayer-footer-container">
        <Footer />
      </div>
    </>
  );
};

export default JoinUs;
