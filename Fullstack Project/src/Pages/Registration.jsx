import "../Pages/Page Styles/Registration.css";
import NavBar from "../Components/navBar";
import Footer from "../Components/Footer";
 
const Registration = () => {
  return (
    <>
      <div className="registration-navbar-container">
        <NavBar/>
      </div>
      
      <div className="registration-form-container">
        <form action="#" method="post"> 
          <div className="registration-form-title"><h1>REGISTRATION</h1></div>
          <div className="registration-aligned-fields">
            <label for="name">NAME:</label>
            <input type="text" name="name" placeholder="Enter Name..."required/> 
          </div>
          <div className="registration-aligned-fields">
            <label for="age">AGE:</label>
            <input type="text" name="age" placeholder="Enter Age..." required/>
          </div>
          <div className="registration-aligned-fields">
            <label for="sex">SEX</label>
            <select id="sex" name="sex" defaultValue="" required>
              <option value="" disabled hidden>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="registration-aligned-fields">
            <label for="event">EVENT:</label>
            <select id="event" name="event" defaultValue="" required>
              <option value="" disabled hidden>Select Event</option>
              <option value="event1">Event 1</option>
              <option value="event2">Event 2</option>
            </select>
          </div>
          <div className="registration-aligned-fields">
            <label for="participation">PARTICIPATION:</label>
            <select id="participation" name="participation" defaultValue="" class="other-style" required>
              <option value="" disabled hidden></option>
              <option value="participant">Participant</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </div>
          <div className="registration-aligned-fields">
            <label for="assignment">ASSIGNMENT:<br /><p>If volunteer only*</p></label>
            <select id="assignment" name="assignment" defaultValue="" class="other-style" required>
              <option value="" disabled hidden></option>
              <option value="usher">Usher</option>
              <option value="media">Media and Creatives</option>
              <option value="music">Music and Production</option>
              <option value="security">Security</option>
              <option value="medical">Medical Team</option>
            </select>
          </div>
          <div className="registration-aligned-fields">
            <label for="email">EMAIL:</label>
            <input type="text" name="email" placeholder="Enter Email..." required/>
          </div>
          <div className="registration-aligned-fields">
            <label for="contact">CONTACT NO:</label>
            <input type="text" name="contact" placeholder="Enter Contact Number... " class="other-style" required/>
          </div>
        </form>
      </div>

     
      <div className="registration-footer-container">
        <Footer/>
      </div>
    </>
  );
};

export default Registration;
