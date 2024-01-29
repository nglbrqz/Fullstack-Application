import "../Pages/Page Styles/Dashboard.css";
import logo from "../assets/siteimages/sitelogo/whitelogo.png";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        console.log('Error details:', error.response?.data); // Add null check

        // Handle error states or setUserData to a default value if needed
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div className="top-nav">
        <div className="left">
          <img src={logo} alt="Logo" className="dashboard-logo" />
        </div>
        <div className="right">
          <h1>Dashboard</h1>
          {userData ? (
            <p>
              Welcome, {userData.name || 'Unknown'} 
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <div className="side-panel"></div>

      <div className="dashboard-container">
        <div className="main-content">
          <h2>Main Content</h2>
        </div>
      </div>
    </>
  );
}

export default Dashboard;