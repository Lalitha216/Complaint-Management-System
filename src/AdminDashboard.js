import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from './utils/logout'; // Import the logout function
import "./AdminDashboard.css"; // For styling

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Determine greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="profile-section">
          <img
            src={require("./images/profile.png")} // Profile picture
            alt="Profile"
            className="profile-pic"
          />
          <h1 className="greeting">{getGreeting()}, Admin!</h1>
          <button onClick={() => logout(navigate)}>Logout</button> {/* Logout button */}
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-grid">
          <div
            className="dashboard-card"
            onClick={() => navigate("/view-complaints")}
          >
            <img
              src={require("./images/post-complaint.png")}
              alt="Post a Complaint"
              className="card-icon"
            />
            <h2>View Complaints</h2>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/events")}
          >
            <img
              src={require("./images/raise-issue.jpg")}
              alt="Swachatha Events"
              className="card-icon"
            />
            <h2>Events</h2>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/status")}
          >
            <img
              src={require("./images/status.png")}
              alt="Status"
              className="card-icon"
            />
            <h2>Status</h2>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/view-feedback")}
          >
            <img
              src={require("./images/feedback.png")}
              alt="Feedback"
              className="card-icon"
            />
            <h2>View Feedback</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;