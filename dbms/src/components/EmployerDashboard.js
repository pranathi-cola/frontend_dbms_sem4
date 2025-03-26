import React from "react";

const EmployerDashboard = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="dashboard-container">
      <a href="/logout" className="logout-btn">
        Logout
      </a>
      <h1>Welcome, Employer</h1>
      <button onClick={() => handleNavigation("/view-applicants")}>
        View Job Applicants
      </button>
      <button onClick={() => handleNavigation("/post-job")}>
        Post a New Job
      </button>
      <button onClick={() => handleNavigation("/submit-complaint")}>
        Submit Complaint
      </button>
      <button onClick={() => handleNavigation("/view-interviews")}>
        View Interviews
      </button>
    </div>
  );
};

// Embedded CSS styles as a string
const styles = `
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
  }
  .dashboard-container {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
  }
  .logout-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #dc3545;
    color: white;
    padding: 8px 12px;
    text-decoration: none;
    border-radius: 5px;
  }
  .logout-btn:hover {
    background-color: #c82333;
  }
  h1 {
    margin-bottom: 40px;
  }
  button {
    display: block;
    margin: 10px auto;
    padding: 10px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 220px;
  }
  button:hover {
    background-color: #0056b3;
  }
`;

// Append the styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default EmployerDashboard;
