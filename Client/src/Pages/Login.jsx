import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from "../assets/siteimages/sitelogo/whitelogo.png";
import PropTypes from "prop-types"; 
function Login({ handleLogin }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });

      if (response.data.token) {
        toast.success("Login successful");
        handleLogin(response.data.token); // Call handleLogin function with token
        navigate("/dashboard");
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-main-cont">
      <div className="login-container">
        <img src={logo} alt="Logo" className="login-logo" />

        <h2 className="login-title">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <input
              className="email-form"
              type="email"
              id="email"
              value={data.email}
              onChange={(e) =>
                setData({ ...data, email: e.target.value })
              }
              placeholder="Email"
            />
          </div>

          <div className="login-input-group">
            <input
              className="login-password-form"
              type="password"
              id="password"
              value={data.password}
              onChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
              placeholder="Password"
            />
          </div>

          <button className="login-sign-button" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};


export default Login;
