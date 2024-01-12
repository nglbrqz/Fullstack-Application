import "../Pages/Page Styles/Login.module.css"
import  { useState } from "react";

 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., send a request to your backend)
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Log in</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-input-group">
          <label htmlFor="email">Email:</label>

          <input className="email-form"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-input-group">
          <label htmlFor="password">Password:</label>

          <input className="password-form"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="sign-button" type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
