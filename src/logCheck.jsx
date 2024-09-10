import React, { useState, useEffect } from "react";
import validateCredentials from "./checkloginInfo"; // Make sure this is the correct path
import "./styles.css"; // Import the CSS file for styling

export default function CheckLogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false); // Track if the login button was pressed

  // Function to handle login check
  const handleLogin = () => {
    setHasSubmitted(true); // Set that the user has pressed the login button
    if (validateCredentials(username, password)) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setIsLoggedIn(false);
      setError("Invalid username or password");
    }
  };

  // Reset the validation if username or password changes after pressing the button
  useEffect(() => {
    if (hasSubmitted) {
      if (validateCredentials(username, password)) {
        setIsLoggedIn(true);
        setError("");
      } else {
        setIsLoggedIn(false);
        setError("Invalid username or password");
      }
    }
  }, [username, password, hasSubmitted]);

  // Clear error message when username or password changes
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    setError(""); // Clear error message on input change
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setError(""); // Clear error message on input change
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <h1>Hello, {username}</h1>
      ) : (
        <div>
          <div>
            <h1>Login</h1>
          </div>
          <div>
            <input
              type="text"
              className="textinput"
              placeholder="Username"
              value={username}
              onChange={handleChangeUsername} // Use handleChangeUsername
            />
            <input
              type="password"
              className="textinput"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword} // Use handleChangePassword
            />
            <input
              type="submit"
              className="buttoninput"
              value="OK"
              onClick={handleLogin} // Start the validation when the button is clicked
            />
          </div>
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Error message */}
        </div>
      )}
    </div>
  );
}
