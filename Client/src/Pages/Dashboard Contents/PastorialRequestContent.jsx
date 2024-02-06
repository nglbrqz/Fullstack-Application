// PastorialRequestContent.js

import { useState, useEffect } from "react";
import axios from "axios";
import StoryModal from "./Dashboard Components/StoryModal"; // Import the new modal component
import ConfirmationModal from "./Dashboard Components/ConfirmationModal"
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard Style/PastorialRequestContent.css";

const PrayerRequestContent = () => {
  const [pastorialRequests, setPrayerRequests] = useState([]);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isStoryModalOpen, setStoryModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [selectedStoryText, setSelectedStoryText] = useState("");

  useEffect(() => {
    const fetchPrayerRequests = async () => {
      try {
        const response = await axios.get("/pastorialrequests/getpastorialreq");
        setPrayerRequests(response.data);
      } catch (error) {
        console.error("Error fetching pastorial requests:", error);
      }
    };

    fetchPrayerRequests();
  }, []);

  const handleDeleteClick = (id) => {
    setSelectedRequestId(id);
    setDeleteModalOpen(true);
  };

  const handleDeleteCancel = () => {
    setSelectedRequestId(null);
    setDeleteModalOpen(false);
  };

  const handleViewText = async (id) => {
    try {
      await axios.post(`/pastorialrequests/markpastorialreq/${id}`);
      setPrayerRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id ? { ...request, readStatus: true } : request
        )
      );
    } catch (error) {
      console.error("Error marking pastorial request as read:", error);
    }
  };

  const handleStoryClick = (text) => {
    setSelectedStoryText(text);
    setStoryModalOpen(true);
  };

  const handleStoryModalClose = () => {
    setSelectedStoryText("");
    setStoryModalOpen(false);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
        `/pastorialrequests/deletepastorialreq/${selectedRequestId}`
      );
      setPrayerRequests((prevRequests) =>
        prevRequests.filter((request) => request._id !== selectedRequestId)
      );
      setSelectedRequestId(null);
      setDeleteModalOpen(false);
      toast.success("Entry deleted successfully");
    } catch (error) {
      toast.error("Error deleting entry");
      console.error("Error deleting entry:", error);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      const lastSpaceIndex = text.lastIndexOf(" ", maxLength);
      return lastSpaceIndex !== -1
        ? text.slice(0, lastSpaceIndex) + "..."
        : text.slice(0, maxLength) + "...";
    }
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredPrayerRequests = () => {
    switch (selectedFilter) {
      case "read":
        return pastorialRequests.filter((request) => request.readStatus);
      case "unread":
        return pastorialRequests.filter((request) => !request.readStatus);
      default:
        return pastorialRequests;
    }
  };

  return (
    <>
      <div className="pastorialreq-header">
        <h1>PRAYER REQUEST</h1>
        <select
          className="pastorialreq-filter"
          name="pastorialreq-filter"
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>
      </div>

      <div className="pastorialreq-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date Created</th>
              <th>Prayer Text</th>
              <th>Read Status</th>
              <th>View Story</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredPrayerRequests().map((request) => (
              <tr key={request._id}>
                <td>{request.name}</td>
                <td>{new Date(request.date).toLocaleDateString()}</td>
                <td>{truncateText(request.pastorialText, 150)}</td>
                <td>{request.readStatus ? "Read" : "Unread"}</td>
                <td>
                  <div
                    className="dashboard-table-icon"
                    onClick={() => {
                      handleStoryClick(request.pastorialText);
                      handleViewText(request._id, request.pastorialText);
                    }}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                </td>
                <td>
                  <div
                    className="dashboard-table-icon"
                    id="delete-icon"
                    onClick={() => handleDeleteClick(request._id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />

      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={handleStoryModalClose}
        storyText={selectedStoryText}
      />
    </>
  );
};

export default PrayerRequestContent;
