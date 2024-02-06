import React, { useEffect } from "react";
import "./Registration.css";
import NavBar from "../navBar";
import Footer from "../Footer";
import axios from "axios";
import { toast } from "react-hot-toast";
import  { useState } from "react";

const RegistrationConnectGroup = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("a")
  const connectgroupName = queryParameters.get("b") 

  const [connectgroupData, setConnectgroupData] = useState({
    connectgroupId: id,
    connectgroupName: connectgroupName,
    name: '',
    age: '',
    email: '',
    contactNo: ''
  });

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Connect Group Data:", connectgroupData); // Log the entire connectgroupData object
    const { connectgroupId, name, age, email, contactNo } = connectgroupData;
  
    try {
      const response = await axios.post('/connectgroup/addconnectgroup', {
        connectgroupId,
        name,
        age,
        email,
        contactNo
      });
  
      const responseData = response.data; // Rename to avoid conflict
  
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        // Update only the relevant part of the state
        setConnectgroupData((prevData) => ({
          ...prevData,
          message: 'Your submission has been sent!',
        }));
        toast.success('Your submission has been sent!');
  
        setConnectgroupData({
          connectgroupId: id,
          name: '',
          age: '',
          email: '',
          contactNo: ''
        });
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="registration-navbar-container">
        <NavBar colorScheme="dark" />
      </div>

      <div className="registration-form-container">
        <form onSubmit={handleSubmit}>
          <div className="registration-form-title">
            <h1>REGISTRATION</h1>
            <h2>CONNECT GROUP:{/*Here yung chosen connect group name */}</h2>
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="name">NAME:</label>
            <input 
              type="text" 
              id="connectgroupname"
              value={connectgroupData.name}
              onChange={(e) => setConnectgroupData({ ...connectgroupData, name: e.target.value })}
              name="name" 
              placeholder="Enter Name..." required />
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="age">AGE:</label>
            <input 
              type="text" 
              name="connectgroupage" 
              id="volunteername"
              value={connectgroupData.age}
              onChange={(e) => setConnectgroupData({ ...connectgroupData, age: e.target.value })}
              placeholder="Enter Age..." required />
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="connect-group">
              CONNECT GROUP:
            </label>
            <select
              id="connect-group"
              name="connect-group"
              value={connectgroupData.connectgroupId} // Set the value to the connectgroupId in state
              onChange={(e) =>
                setConnectgroupData({ ...connectgroupData, connectgroupId: e.target.value, // Update the connectgroupId in state on change
                })
              }
              className="other-style"
              required
            >
              <option value="" disabled hidden></option>
              <option value="youth">Youth Connect</option>
              <option value="jubilant">Jubilant Connect</option>
              <option value="young-adults">Young Adults Connect</option>
              <option value="couples">Couples Connect</option>\
              <option value="basketball">Basketball Connect</option>
            </select>
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="email">EMAIL:</label>
            <input 
              type="text" 
              name="email" 
              id="connectgroupemail"
              value={connectgroupData.email}
              onChange={(e) => setConnectgroupData({ ...connectgroupData, email: e.target.value })}
              placeholder="Enter Email..." required />
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="contact">CONTACT NO:</label>
            <input 
              type="text" 
              name="connectgroupcontact" 
              id="connectgroupemail"
              value={connectgroupData.contactNo}
              onChange={(e) => setConnectgroupData({ ...connectgroupData, contactNo: e.target.value })}
              placeholder="Enter Contact Number..." className="other-style" required />
          </div>
          <div className="registration-button-container">
            <button type="reset" className="registration-button">
              <span className="registration-button-span">Reset</span>
            </button>
            <button type="submit" className="registration-button">
                <span className="registration-button-span">Submit</span>
            </button>
          </div>
        </form>
      </div>

      <div className="registration-footer-container">
        <Footer />
      </div>
    </>
  );
};

export default RegistrationConnectGroup;