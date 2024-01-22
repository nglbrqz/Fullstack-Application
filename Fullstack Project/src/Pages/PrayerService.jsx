import  { useState } from "react";
import "../Pages/Page Styles/PrayerServices.css";
import NavBar from "../Components/navBar";
import Footer from "../Components/Footer";

const PrayerService = () => {
  // State for handling input values
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [prayerText, setPrayerText] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();

     if (!name || !date || !prayerText) {
      alert("Please fill in all required fields");
      return;
    }
 
    alert(`Form submitted!\nName: ${name}\nDate: ${date}\nPrayer: ${prayerText}`);
  };

  return (
    <>
      <div className="prayer-header-container">
        <NavBar />

        <div className="prayer-text-container">
          <h1 className="prayer-title">PRAYER REQUEST</h1>
        </div>
      </div>

      <div className="prayer-section-container">
        <form onSubmit={handleSubmit}>
          <div className="prayer-request-container">
            <div className="prayer-wrapper">
              <div className="prayer-input-container">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="prayerclientname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="prayer-input-container">
                <label htmlFor="date">Date:</label>
                <input
                  placeholder="Date:"
                  type="date"
                  id="prayerclientdate"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className="prayer-input-container">
              <textarea
                placeholder="Enter Prayer..."
                id="prayerText"
                value={prayerText}
                onChange={(e) => setPrayerText(e.target.value)}
              />
            </div>

            <button type="submit" className="prayer-button">
              <span className="prayer-button-span">Submit</span>
            </button>
          </div>
        </form>
      </div>

      <div className="prayer-footer-container">
        <Footer />
      </div>
    </>
  );
};

export default PrayerService;
