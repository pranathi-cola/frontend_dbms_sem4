import { Routes, Route } from "react-router-dom";

import LoginRegister from "./components/LoginRegister";
import AddSkills from "./components/AddSkills";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import Employee from "./components/Employee";
import EmployeeDashboard from "./components/EmployeeDashboard";
import Employer from "./components/Employer";
import EmployerDashboard from "./components/EmployerDashboard";
import Login from "./components/Login";
import MatchingJobs from "./components/MatchingJobs";
import PostJob from "./components/PostJob";
import RegisterUser from "./components/Register";
import RegisterEmployee from "./components/RegisterEmployee";
import RegisterEmployer from "./components/RegisterEmployer";
import ScheduleInterview from "./components/ScheduleInterview";
import SubmitComplaint from "./components/SubmitComplaint";
import UpdateResume from "./components/UpdateResume";
import ViewApplicants from "./components/ViewApplicants";
import ComplaintsPage from "./components/ViewComplaints";
import ViewJobs from "./components/ViewJobs";
import ViewScheduledInterviews from "./components/ViewScheduledInterviews";
import ViewUsers from "./components/ViewUsers";
import ApplicantDetails from "./components/ViewApplicantDetails";

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
const Lol = () =>
{
    return (
    <div>
        <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/addskills" element={<AddSkills />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/employerdashboard" element={<EmployerDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/matchingjobs" element={<MatchingJobs />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/registeruser" element={<RegisterUser />} />
        <Route path="/registeremployee" element={<RegisterEmployee />} />
        <Route path="/registeremployer" element={<RegisterEmployer />} />
        <Route path="/scheduleinterview" element={<ScheduleInterview />} />
        <Route path="/submitcomplaint" element={<SubmitComplaint />} />
        <Route path="/applicantdetails" element={<ApplicantDetails applicant={applicant} jobs={jobs} />} />
        <Route path="/updateresume" element={<UpdateResume />} />
        <Route path="/viewapplicants" element={<ViewApplicants />} />
        <Route path="/complaintspage" element={<ComplaintsPage />} />
        <Route path="/viewjobs" element={<ViewJobs />} />
        <Route path="/viewscheduledinterviews" element={<ViewScheduledInterviews />} />
        <Route path="/viewusers" element={<ViewUsers />} />
      </Routes>
    </div>);
}

export default Lol;