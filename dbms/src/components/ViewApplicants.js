import React from "react";

const ViewApplicants = () => {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      candidates: [
        { id: 101, name: "John Doe" },
        { id: 102, name: "Jane Smith" }
      ]
    },
    {
      id: 2,
      title: "Data Analyst",
      candidates: [
        { id: 103, name: "Alice Johnson" },
        { id: 104, name: "Bob Brown" }
      ]
    }
  ];

  return (
    <div className="container">
      <h2>Applicants by Job</h2>
      {jobs.map((job) => (
        <div key={job.id}>
          <div className="job-title">{job.title}</div>
          <table className="table">
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {job.candidates.map((candidate) => (
                <tr key={candidate.id}>
                  <td>{candidate.name}</td>
                  <td>
                    <a href={`/view-applicant-details/${candidate.id}`} className="btn">
                      View Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

// Inline CSS
const styles = `
  .container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  .job-title {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
  }
  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  .table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  .table th {
    background-color: #f4f4f4;
  }
  .btn {
    display: inline-block;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
  .btn:hover {
    background-color: #0056b3;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default ViewApplicants;
