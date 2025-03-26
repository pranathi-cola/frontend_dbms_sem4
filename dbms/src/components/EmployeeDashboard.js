import React, { useState } from "react";

const EmployeeDashboard = () => {
  // You can later replace this with props or context data
  const [username, setUsername] = useState("User");

  // Example message state, you can populate this as needed
  const [messages, setMessages] = useState([
    // { category: "success", message: "Profile updated successfully!" }
  ]);

  return (
    <div className="dashboard-container">
      {/* Logout Button */}
      <button className="logout-btn" onClick={() => window.location.href = "/logout"}>
        Logout
      </button>

      {/* Greeting */}
      <h2>Welcome, {username}!</h2>

      {/* Navigation buttons */}
      <ul className="dashboard-menu">
        <li>
          <button onClick={() => window.location.href = "/add-skills"}>
            Add Skills
          </button>
        </li>
        <li>
          <button onClick={() => window.location.href = "/update-resume"}>
            Update Resume
          </button>
        </li>
        <li>
          <button onClick={() => window.location.href = "/submit-complaint"}>
            Submit Complaint
          </button>
        </li>
        <li>
          <button onClick={() => window.location.href = "/view-jobs"}>
            View All Jobs
          </button>
        </li>
        <li>
          <button onClick={() => window.location.href = "/matching-jobs"}>
            Jobs Matching My Skills
          </button>
        </li>
        <li>
          <button onClick={() => window.location.href = "/view-scheduled-interviews"}>
            Scheduled Interviews
          </button>
        </li>
      </ul>

      {/* Flash messages */}
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index} className={msg.category}>
            {msg.message}
          </p>
        ))}
      </div>
    </div>
  );
};

// CSS styles as a string
const styles = `
.dashboard-container {
  position: relative;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.logout-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: #c82333;
}

.dashboard-menu {
  list-style-type: none;
  padding: 0;
  margin-top: 40px;
}

.dashboard-menu li {
  margin: 10px 0;
}

.dashboard-menu button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.dashboard-menu button:hover {
  background-color: #0056b3;
}

.messages p {
  margin: 10px 0;
  font-size: 14px;
}

.messages .success {
  color: green;
}

.messages .error {
  color: red;
}
`;

// Append CSS to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default EmployeeDashboard;
