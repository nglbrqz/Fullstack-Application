import "../Pages/Page Styles/Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/siteimages/sitelogo/whitelogo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., send a request to your backend)
    console.log("Email:", email, "Password:", password);
    // Navigate to the dashboard
  };

  // I have the updated code for this portion on my local clone branch :v 
  // will not update until there's a parent folder for all this
  // para malagay ko yung login api folder pag pwede na owo)b

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
          <Link to="/dashboard">
            <button className="login-sign-button" type="submit">
              Log in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
