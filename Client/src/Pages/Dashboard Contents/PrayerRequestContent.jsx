// PrayerRequestContent.js

import { useState, useEffect } from "react";
import axios from "axios";
import StoryModal from "./Dashboard Components/StoryModal"; // Import the new modal component
import ConfirmationModal from "./Dashboard Components/ConfirmationModal"
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard Style/PrayerRequestContent.css";

const PrayerRequestContent = () => {
  const [prayerRequests, setPrayerRequests] = useState([]);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isStoryModalOpen, setStoryModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [selectedStoryText, setSelectedStoryText] = useState("");

  useEffect(() => {
    const fetchPrayerRequests = async () => {
      try {
        const response = await axios.get("/prayerrequests/getprayerreq");
        setPrayerRequests(response.data);
      } catch (error) {
        console.error("Error fetching prayer requests:", error);
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
      await axios.post(`/prayerrequests/markprayerreq/${id}`);
      setPrayerRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id ? { ...request, readStatus: true } : request
        )
      );
    } catch (error) {
      console.error("Error marking prayer request as read:", error);
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
        `/prayerrequests/deleteprayerreq/${selectedRequestId}`
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
        return prayerRequests.filter((request) => request.readStatus);
      case "unread":
        return prayerRequests.filter((request) => !request.readStatus);
      default:
        return prayerRequests;
    }
  };

  return (
    <>
      <div className="prayerreq-header">
        <h1>PRAYER REQUEST</h1>
        <select
          className="prayerreq-filter"
          name="prayerreq-filter"
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>
      </div>

      <div className="prayerreq-table">
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
                <td>{truncateText(request.prayerText, 150)}</td>
                <td>{request.readStatus ? "Read" : "Unread"}</td>
                <td>
                  <div
                    className="dashboard-table-icon"
                    onClick={() => {
                      handleStoryClick(request.prayerText);
                      handleViewText(request._id, request.prayerText);
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
