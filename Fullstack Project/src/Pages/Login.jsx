import "../Pages/Page Styles/Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/newlifelogowhite.png";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* untouched part kanina in case I mess this up
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., send a request to your backend)
    console.log("Email:", email, "Password:", password);
    // Navigate to the dashboard
  };
*/


const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.get('http://localhost:5173/api/nlswdb/GetCredentials');
    
    console.log('Response:', response.data); //remove this when code is fixed

    const adminCredentials = response.data;

    const validAdmin = adminCredentials.find(
      (Admin) => Admin.AdminEmail === email && Admin.AdminPass === password
    );

    if (validAdmin) {
      // Redirect to admin dashboard if credentials are valid
      // window.location.href = '/Dashboard';
      <Link to="/dashboard"></Link>
    } else {
      // Display toast for invalid credentials
      alert('Invalid username or password!');
    }
  } catch (error) {
    console.error('Error fetching admin credentials:', error);
    // Handle other errors as needed
  }
  //console.log("Email:", email, "Password:", password);
};

  return (
    <div className="login-main-cont">
      <div className="login-container">
        <img src={logo} alt="Logo" className="nav-logo" id="nav-logo" />

        <h2 className="login-title">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <input
              className="email-form"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className="login-input-group">
            <input
              className="login-password-form"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          {/* Use Link to navigate to the dashboard */}
          {/* <Link to="/dashboard"> */}
            <button className="login-sign-button" type="submit">
              Log in
            </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
