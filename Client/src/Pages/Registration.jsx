import "../Pages/Page Styles/Registration.css";
import NavBar from "../Components/navBar";
import Footer from "../Components/Footer";

 
 
const Registration = () => {

 



  return (
    <>
      <div className="registration-navbar-container">
        <NavBar colorScheme="dark" />
      </div>

      <div className="registration-form-container">
        <form action="#" method="post">
          <div className="registration-form-title">
            <h1>REGISTRATION</h1>
            <h2>EVENT</h2>
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="event">EVENT:</label>
            <div className="registration-event-name ">Unknown{/*Here yung name ng events */}</div>
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="name">NAME:</label>
            <input type="text" name="name" placeholder="Enter Name..." required />
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="age">AGE:</label>
            <input type="text" name="age" placeholder="Enter Age..." required />
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="sex">SEX:</label>
            <select id="sex" name="sex" defaultValue="" required>
              <option value="" disabled hidden>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="participation">PARTICIPATION:</label>
            <select id="participation" name="participation" defaultValue="" className="other-style" required>
              <option value="" disabled hidden></option>
              <option value="participant">Participant</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="assignment">
              ASSIGNMENT:
              <br />
              <p>If volunteer only*</p>
            </label>
            <select id="assignment" name="assignment" defaultValue="" className="other-style">
              <option value="" disabled hidden></option>
              <option value="usher">Usher</option>
              <option value="media">Media and Creatives</option>
              <option value="music">Music and Production</option>
              <option value="security">Security</option>
              <option value="medical">Medical Team</option>
            </select>
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="email">EMAIL:</label>
            <input type="text" name="email" placeholder="Enter Email..." required />
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="contact">CONTACT NO:</label>
            <input type="text" name="contact" placeholder="Enter Contact Number..." className="other-style" required />
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

export default Registration;