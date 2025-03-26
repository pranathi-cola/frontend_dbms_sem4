import React, { useState } from "react";

const RegisterUser = () => {
  // Manage form data in component state
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    user_type: "Employer",
    password: ""
  });

  // Update state as the user types in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, log the form data.
    console.log("Form submitted:", formData);
    // In a real app, submit the data to your backend here.
    // Reset the form fields
    setFormData({
      name: "",
      username: "",
      user_type: "Employer",
      password: ""
    });
  };

  return (
    <div className="register-container">
      <h2>Insert User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <br /><br />

        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={formData.username}
          onChange={handleChange}
          required 
        />
        <br /><br />

        <label htmlFor="user_type">User Type:</label>
        <select 
          id="user_type" 
          name="user_type" 
          value={formData.user_type}
          onChange={handleChange}
        >
          <option value="Employer">Recruiter</option>
          <option value="Employee">Candidate</option>
        </select>
        <br /><br />

        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={formData.password}
          onChange={handleChange}
          required 
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Embedded CSS styles as a JavaScript string
const styles = `
  .register-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
  }
  .register-container h2 {
    text-align: center;
  }
  .register-container label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .register-container input,
  .register-container select,
  .register-container button {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .register-container button {
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  .register-container button:hover {
    background-color: #0056b3;
  }
`;

// Append the CSS to the document head so that the styles are applied
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default RegisterUser;
