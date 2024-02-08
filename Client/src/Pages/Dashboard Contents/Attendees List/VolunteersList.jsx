import { useState, useEffect } from "react";
import axios from "axios";
import ConfirmationModal from "../Dashboard Components/ConfirmationModal";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Attendees Style/AttendeesStyle.css";
import { useLocation } from "react-router-dom";

const VolunteersList = () => {
  const location = useLocation();
  const volunteerActivityName = location.state?.volunteerActivityName || "Default Value";
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [volunteers, setVolunteers] = useState([]);
  const [filteredVolunteers, setFilteredVolunteers] = useState([]); // Initialize with an empty array

  // Function to fetch volunteers from the server
  const fetchVolunteers = async () => {
    try {
      const response = await axios.get("/volunteer/getvolunteer");
      setVolunteers(response.data);
      
    } catch (error) {
      console.error("Error fetching volunteers:", error);
    }
  };

  useEffect(() => {
    fetchVolunteers(); // Fetch volunteers only once when the component mounts
  }, []);

  useEffect(() => {
    // Filter volunteers based on volunteerActivityName when component mounts
    handleFilterChange(volunteerActivityName);
  }, []);

  useEffect(() => {
    // Filter volunteers based on volunteerActivityName
    handleFilterChange(volunteerActivityName);
  }, [volunteerActivityName, volunteers]);

  const handleFilterChange = (filter) => {
    let filteredVolunteers = [];
    
    // Filter volunteers based on volunteerId
    switch (filter) {
      case "Music and Production":
        filteredVolunteers = volunteers.filter((volunteer) => volunteer.volunteerId === 1);
        break;
      case "Media and Creatives":
        filteredVolunteers = volunteers.filter((volunteer) => volunteer.volunteerId === 2);
        break;
      case "Ushers":
        filteredVolunteers = volunteers.filter((volunteer) => volunteer.volunteerId === 3);
        break;
      case "Security":
        filteredVolunteers = volunteers.filter((volunteer) => volunteer.volunteerId === 4);
        break;
      case "Medical Team":
        filteredVolunteers = volunteers.filter((volunteer) => volunteer.volunteerId === 5);
        break;
      default:
        // If no filter is applied, show all volunteers
        filteredVolunteers = volunteers;
    }
  
    // Update the state with filtered volunteers
    setFilteredVolunteers(filteredVolunteers);
  };

  const setVolunteerCategory = (id) => {
    switch (id) {
      case 1:
        return "Music and Production";
      case 2:
        return "Media and Creatives";
      case 3:
        return "Ushers";
      case 4:
        return "Security";
      case 5:
        return "Medical Team";
      default:
        return "Unknown";
    }
  };

  const getFilteredVolunteers  = () => {
    return filteredVolunteers;
  };
  
  const handleDeleteClick = (id) => {
    setSelectedRequestId(id);
    setDeleteModalOpen(true);
  };

  const handleDeleteCancel = () => {
    setSelectedRequestId(null);
    setDeleteModalOpen(false);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
        `/volunteer/deletevolunteer/${selectedRequestId}`
      );
      setVolunteers((preVolunteer) =>
      preVolunteer.filter((volunteer) => volunteer._id !== selectedRequestId)
      );
      setSelectedRequestId(null);
      setDeleteModalOpen(false);
      toast.success("Entry deleted successfully");
      fetchVolunteers();
    } catch (error) {
      toast.error("Error deleting entry");
      console.error("Error deleting entry:", error);
    }
  };

  return (
    <>
      <div className="vcg-header">
        <h1>VOLUNTEERS</h1>
        <select
          className="vcg-filter"
          name="vcg-filter"
          defaultValue={volunteerActivityName}
          onChange={(e) => handleFilterChange(e.target.value)}     
        >
          <option value="Default">Default</option>
          <option value="Music and Production">Music and Production</option>
          <option value="Media and Creatives">Media and Creatives</option>
          <option value="Ushers">Ushers</option>
          <option value="Security">Security</option>
          <option value="Medical Team">Medical Team</option>
        </select>
      </div>

      <div className="volunteers-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Category</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {getFilteredVolunteers().map((volunteer) => (
              <tr key={volunteer._id}>
                <td>{volunteer.name}</td>
                <td>{volunteer.age}</td>
                <td>{volunteer.sex}</td>
                <td>{volunteer.email}</td>
                <td>{volunteer.contactNo}</td>
                <td>{setVolunteerCategory(volunteer.volunteerId)}</td>
                <td>
                  <div
                    className="dashboard-table-icon"
                    id="delete-icon"
                    onClick={() => handleDeleteClick(volunteer._id)}
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
    </>
  );
};

export default VolunteersList;
