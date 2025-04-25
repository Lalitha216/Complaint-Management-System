import React, { useState, useEffect } from "react";
import './StatusPage.css';
import { useNavigate } from "react-router-dom";

const StatusPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [statusUpdates, setStatusUpdates] = useState({}); // Track selected status for each complaint

  // Fetch complaints from the database
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch("http://localhost:5000/get-complaints");
        const data = await response.json();
        setComplaints(data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchComplaints();
  }, []);

  // Handle status change
  const handleStatusChange = (complaintId, newStatus) => {
    setStatusUpdates((prev) => ({
      ...prev,
      [complaintId]: newStatus,
    }));
  };

  // Handle status submission
  const postStatus = async (complaintId) => {
    try {
      const newStatus = statusUpdates[complaintId];
      const response = await fetch(`http://localhost:5000/update-status/${complaintId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        alert("Status updated successfully!");
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error posting status:", error);
    }
  };
   const navigate = useNavigate();
   
  // Function to handle back navigation
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div className="status-page">
      <h1>Status Page</h1>
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>Complaint Text</th>
            <th>Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {complaints.map((complaint) => (
    <tr key={complaint._id}>
      <td>{new Date(complaint.date).toLocaleDateString()}</td>
      <td>{complaint.complaintText}</td>
      <td>{complaint.location}</td>
      <td>
        <select
          value={statusUpdates[complaint.date] || complaint.status || "Yet to Begin"}
          onChange={(e) => handleStatusChange(complaint.date, e.target.value)}
        >
          <option value="Yet to Begin">Yet to Begin</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </td>
      <td>
        <button onClick={() => postStatus(complaint.date)}>Post</button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
      {/* Back Button */}
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default StatusPage;