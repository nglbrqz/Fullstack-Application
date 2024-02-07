import { useState, useEffect } from "react";
import axios from "axios";
import ConfirmationModal from "../Dashboard Components/ConfirmationModal";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Attendees Style/AttendeesStyle.css";
import { useLocation } from "react-router-dom";

const ConnectgroupList = () => {
  const location = useLocation();
  const connectgroupActivityName = location.state?.connectgroupActivityName || "Default Value";
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [connectgroups, setConnectgroups] = useState([]);
  const [filteredConnectgroups, setfilteredConnectgroups] = useState([]);

  useEffect(() => {
    const fetchConnectgroups = async () => {
      try {
        const response = await axios.get("/connectgroup/getconnectgroup");
        setConnectgroups(response.data);
        setfilteredConnectgroups(response.data); // Set filtered volunteers initially to all volunteers
      } catch (error) {
        console.error("Error fetching connectgroups:", error);
      }
    };
    
    fetchConnectgroups();
  }, []); // Fetch connectgroups only once when the component mounts

  useEffect(() => {
    // Trigger filter change when component mounts to display volunteer list based on initial filter
    handleFilterChange(connectgroupActivityName);
  }, [connectgroupActivityName]);


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
        `/connectgroup/deleteconnectgroup/${selectedRequestId}`
      );
      setConnectgroups((prevConnectgroup) =>
      prevConnectgroup.filter((connectgroup) => connectgroup._id !== selectedRequestId)
      );
      setSelectedRequestId(null);
      setDeleteModalOpen(false);
      toast.success("Attendee deleted successfully");
    } catch (error) {
      toast.error("Error deleting Attendee");
      console.error("Error deleting Attendee:", error);
    }
  };

  const handleFilterChange = (filter) => {
    let filteredConnectgroups = [];
    
    // Filter volunteers based on connectgroupId
    switch (filter) {
      case "Youth Connect":
        filteredConnectgroups = connectgroups.filter((connectgroup) => connectgroup.connectgroupId == "youth");
        break;
      case "Jubilant Connect":
        filteredConnectgroups = connectgroups.filter((connectgroup) => connectgroup.connectgroupId == "jubilant");
        break;
      case "Young Adults Connect":
        filteredConnectgroups = connectgroups.filter((connectgroup) => connectgroup.connectgroupId == "young-adults");
        break;
      case "Couples Connect":
        filteredConnectgroups = connectgroups.filter((connectgroup) => connectgroup.connectgroupId == "couples");
        break;
      case "Basketball":
        filteredConnectgroups = connectgroups.filter((connectgroup) => connectgroup.connectgroupId == "basketball");
        break;
      default:
        // If no filter is applied, show all connectgroups
        filteredConnectgroups = connectgroups;
    }
  
    // Update the state with filtered connectgroups
    setfilteredConnectgroups(filteredConnectgroups);
  };

  const getFilteredConnectgroups  = () => {
    return filteredConnectgroups;
  };

  return (
    <>
      <div className="vcg-header">
        <h1>CONNECT GROUPS</h1>
        <select
          className="vcg-filter"
          name="vcg-filter"
          onChange={(e) => handleFilterChange(e.target.value)}
          defaultValue={connectgroupActivityName}
          
        >
          <option value="Default">Default</option>
          <option value="Youth Connect">Youth Connect</option>
          <option value="Jubilant Connect">Jubilant Connect</option>
          <option value="Young Adults Connect">Young Adults Connect</option>
          <option value="Couples Connect">Couples Connect</option>
          <option value="Basketball">Basketball</option>
        </select>
      </div>

      <div className="vcg-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {getFilteredConnectgroups().map((connectgroup) => (
              <tr key={connectgroup._id}>
                <td>{connectgroup.name}</td>
                <td>{connectgroup.age}</td>
                <td>{connectgroup.email}</td>
                <td>{connectgroup.contactNo}</td>
                <td>
                  <div
                    className="dashboard-table-icon"
                    id="delete-icon"
                    onClick={() => handleDeleteClick(connectgroup._id)}
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

export default ConnectgroupList;
