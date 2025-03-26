import React, { useState, useEffect } from "react";

const Login = () => {
  // Dummy state for flash messages (in a real app these would come from your backend)
  const [flashMessages, setFlashMessages] = useState([
    // Example: { category: "success", message: "Logged in successfully!" }
  ]);

  // Automatically hide flash messages after 3 seconds
  useEffect(() => {
    if (flashMessages.length > 0) {
      const timer = setTimeout(() => {
        setFlashMessages([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [flashMessages]);

  return (
    <div className="login-container">
      <h2>Login</h2>

      {/* Display Flash Messages */}
      {flashMessages.length > 0 && (
        <div className="flash-messages">
          {flashMessages.map((msg, index) => (
            <p key={index} className={msg.category}>
              {msg.message}
            </p>
          ))}
        </div>
      )}

      {/* Employee/Employer Login Form */}
      <form method="POST" action="/login">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" required />
        </div>

        <button type="submit">Login</button>
      </form>

      <br />

      {/* Admin Login Button */}
      <form method="GET" action="/admin-login">
        <button type="submit">Login as Admin</button>
      </form>
    </div>
  );
};

// Embedded CSS styles
const styles = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background: #f4f4f4;
  }
  .login-container {
    background: white;
    padding: 20px;
    max-width: 400px;
    margin: 40px auto;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    text-align: center;
  }
  .flash-messages {
    margin-bottom: 15px;
  }
  .flash-messages p {
    margin: 5px 0;
  }
  .form-group {
    margin: 10px 0;
    text-align: left;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 10px 15px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background: #0056b3;
  }
`;

// Append the CSS to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Login;
