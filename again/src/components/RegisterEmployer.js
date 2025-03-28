import React, { useState } from "react";

const RegisterEmployer = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name_of_poc: "",
    contact_info: ""
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data (replace with actual submission logic as needed)
    console.log("Employer Registration Submitted:", formData);
    // Reset form fields after submission
    setFormData({
      name_of_poc: "",
      contact_info: ""
    });
  };

  return (
    <div className="register-employer-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name_of_poc">Name of Point of Contact:</label>
        <input
          type="text"
          name="name_of_poc"
          value={formData.name_of_poc}
          onChange={handleChange}
          required
        />

        <label htmlFor="contact_info">Contact Info:</label>
        <input
          type="text"
          name="contact_info"
          value={formData.contact_info}
          onChange={handleChange}
          required
        />

        <button type="submit">Complete Registration</button>
      </form>
    </div>
  );
};

// Embedded CSS as a JavaScript string
const styles = `
  .register-employer-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .register-employer-container form {
    display: flex;
    flex-direction: column;
  }
  .register-employer-container label {
    margin: 10px 0 5px;
    font-weight: bold;
  }
  .register-employer-container input {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
  }
  .register-employer-container button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
  }
  .register-employer-container button:hover {
    background-color: #0056b3;
  }
`;

// Append the CSS styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default RegisterEmployer;
