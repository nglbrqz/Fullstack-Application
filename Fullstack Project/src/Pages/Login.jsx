import { useState, useEffect } from "react";
import loginStyles from "../Pages/Page Styles/Login.module.css"; // Import CSS module

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Focus on username input by default
  useEffect(() => {
    const usernameInput = document.getElementById("username");
    if (usernameInput) {
      usernameInput.focus();
    }
  }, []);

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFieldValue(name, value);
  };

  const setFieldValue = (field, value) => {
    if (field === "username") {
      setUsername(value);
    } else if (field === "password") {
      setPassword(value);
    }
  };

  // Clear field value on label click
  const handleLabelClick = (field) => {
    setFieldValue(field, "");
  };

  // Handle login submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className={loginStyles.loginMainContainer}>  
      <div className={loginStyles.container}>
        <div className={loginStyles.pic2}></div>
        <img
          src="https://store-images.s-microsoft.com/image/apps.28471.14139628370441750.28b315c6-e587-4ac5-8b42-4388ed4a2f09.d5ba0d3b-63ca-4d9d-ba00-47fcfa6b02e1"
          alt="Login"
        />
        <h1>Log in To Continue</h1>
        <div className={loginStyles.inputContainer}>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleInputChange}
          />
          <label
            onClick={() => handleLabelClick("username")}
            htmlFor="Username"
            className={`${loginStyles.inputLabel} ${
              username.trim() !== "" ? loginStyles.inputLabelUp : ""
            }`}
          >
            Username
          </label>
        </div>
        {/* ... (rest of the JSX with updated class names) */}
      </div>
      <div className={loginStyles.pic}></div>
    </div>
  );
}

export default Login;