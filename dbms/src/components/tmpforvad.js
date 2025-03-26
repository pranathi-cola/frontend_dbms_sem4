import React from "react";
import ReactDOM from "react-dom/client";
import ApplicantDetails from "./ViewApplicantDetails";

const applicant = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  resume: "https://example.com/resume.pdf",
  skills: "React, JavaScript, CSS, HTML"
};

const jobs = [
  { id: 101, title: "Frontend Developer" },
  { id: 102, title: "React Engineer" }
];

const App = () => {
  return (
    <div>
      <ApplicantDetails applicant={applicant} jobs={jobs} />
    </div>
  );
};

// Use createRoot instead of ReactDOM.render()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;