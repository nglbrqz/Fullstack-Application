import { useEffect, useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarAlt,
  faUsers,
  faPrayingHands,
  faUsersCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Pages/Page Styles/Dashboard.css";
import logo from "../assets/siteimages/sitelogo/whitelogo.png";

import EventsContent from "./Dashboard Contents/EventsContent";
import ConnectGroupsContent from "./Dashboard Contents/ConnectGroupsContent";
import PrayerRequestContent from "./Dashboard Contents/PrayerRequestContent";
import VolunteersContent from "./Dashboard Contents/VolunteersContent";

library.add(
  fab,
  faCalendarAlt,
  faUsers,
  faPrayingHands,
  faUsersCog,
  faSignOutAlt
);

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/auth/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        console.log("Error details:", error.response?.data);
      }
    };

    fetchUserData();
  }, []);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <div className="side-panel">
        <div className="dashboard-side-panel-wrapper">
          <div className="dashboard-logo-container">
            <img src={logo} alt="Logo" className="dashboard-logo" />
          </div>
          <div className="dashboard-admin-container">
            {userData ? (
              <p>{userData.email || "Unknown"}</p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="dashboard-menu-items">
            <div
              className="dashboard-menu-item"
              onClick={() => handleMenuClick("events")}
            >
              <FontAwesomeIcon icon={faCalendarAlt} />
              <p>Events</p>
            </div>
            <div
              className="dashboard-menu-item"
              onClick={() => handleMenuClick("volunteers")}
            >
              <FontAwesomeIcon icon={faUsers} />
              <p>Volunteers</p>
            </div>
            <div
              className="dashboard-menu-item"
              onClick={() => handleMenuClick("prayer")}
            >
              <FontAwesomeIcon icon={faPrayingHands} />
              <p>Prayer Request</p>
            </div>
            <div
              className="dashboard-menu-item"
              onClick={() => handleMenuClick("connectGroups")}
            >
              <FontAwesomeIcon icon={faUsersCog} />
              <p>Connect Groups</p>
            </div>
            <div
              className="dashboard-menu-item"
              id="dashboard-logout"
              onClick={() => handleMenuClick("logout")}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              <p>Log Out</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="main-content">
          {selectedMenu === "events" && <EventsContent />}
          {selectedMenu === "volunteers" && <VolunteersContent />}
          {selectedMenu === "prayer" && <PrayerRequestContent />}
          {selectedMenu === "connectGroups" && <ConnectGroupsContent />}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
