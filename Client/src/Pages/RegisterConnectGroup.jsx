import "../Pages/Page Styles/Registration.css";
import NavBar from "../Components/navBar";
import Footer from "../Components/Footer";

 
 
const RegistrationConnectGroup = () => {
  return (
    <>
      <div className="registration-navbar-container">
        <NavBar colorScheme="dark" />
      </div>

      <div className="registration-form-container">
        <form action="#" method="post">
          <div className="registration-form-title">
            <h1>REGISTRATION</h1>
            <h2>CONNECT GROUP</h2>
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
            <label htmlFor="connect-group">
              CONNECT GROUP:
            </label>
            <select id="connect-group" name="connect-group" defaultValue="" className="other-style" required>
              <option value="" disabled hidden></option>
              <option value="youth">Youth Connect</option>
              <option value="jubilant">Jubilant Connect</option>
              <option value="young-adults">Young Adults Connect</option>
              <option value="couples">Couples Connect</option>
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

export default RegistrationConnectGroup;