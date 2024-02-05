import  { useState } from "react";
import "../Pages/Page Styles/pastorialcare.css";
import NavBar from "../Components/navBar";
import Footer from "../Components/Footer";
import axios from "axios";
import { toast } from "react-hot-toast";

const pastorialcareService = () => {
  // State for handling input values
 
  const [pastorialcareReqData, setpastorialcareReqData] = useState({
    name: '',
    date: getCurrentDate(), // Set initial date to the current date
    pastorialcareText: '',
  });

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, date, pastorialcareText } = pastorialcareReqData;
  
    try {
      const response = await axios.post('/pastorial-carerequests/addpastorial-carereq', {
        name,
        date,
        pastorialcareText,
      });
  
      const responseData = response.data; // Rename to avoid conflict
  
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        // Update only the relevant part of the state
        setpastorialcareReqData((prevData) => ({
          ...prevData,
          message: 'pastorial-care Request successfully created!',
        }));
        toast.success('pastorial-care Request successfully created!');
  
        setpastorialcareReqData({
          name: '',
          date: getCurrentDate(), // Set date to the current date after submission
          pastorialcareText: '',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };


 
  return (
    <>
      <div className="pastorial-care-header-container">
        <NavBar />

        <div className="pastorial-care-text-container">
          <div className="pastorial-care-text-wrapper">
            <div className="pastorial-video-container">
              <video className="pastorial-video" src="" placeholder="Video" controls></video>
            </div>
            <h1 className="pastorial-care-title">Pastorial Care REQUEST</h1>
          </div>
        </div>
      </div>

      <div className="pastorial-care-section-container">
        <form onSubmit={handleSubmit}>
          <div className="pastorial-care-request-container">
            <div className="pastorial-care-wrapper">
              <div className="pastorial-care-input-container">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="pastorial-careclientname"
                  value={pastorialcareReqData.name}
                  onChange={(e) => setpastorialcareReqData({ ...pastorialcareReqData, name: e.target.value })}
                  />
              </div>

              <div className="pastorial-care-input-container">
                <label htmlFor="date">Date:</label>
                <input
                  placeholder="Date:"
                  type="date"
                  id="pastorialcareclientdate"
                  value={pastorialcareReqData.date}
                  onChange={(e) => setpastorialcareReqData({ ...pastorialcareReqData, date: e.target.value })}
                  disabled 
                />
              </div>
            </div>

            <div className="pastorial-care-input-container">
              <textarea
                placeholder="Enter pastorial-care..."
                id="pastorial-careText"
                value={pastorialcareReqData.pastorialcareText}
                onChange={(e) => setpastorialcareReqData({ ...pastorialcareReqData, pastorialcareText: e.target.value })}
              />
            </div>

            <button type="submit" className="pastorial-care-button">
              <span className="pastorial-care-button-span">Submit</span>
            </button>
          </div>
        </form>
      </div>

      <div className="pastorial-care-footer-container">
        <Footer />
      </div>
    </>
  );
};

export default pastorialcareService;
