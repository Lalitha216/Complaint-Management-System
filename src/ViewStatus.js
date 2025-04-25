import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewStatus = () => {
  const [statusData, setStatusData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        const response = await fetch("http://localhost:5000/get-status");
        const data = await response.json();
        console.log("Fetched Data:", data); // Debug log
        setStatusData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching status data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStatusData();
  }, []);

  const handleAddComplaint = () => {
    navigate("/post-complaint"); // Navigate to /post-complaint
  };

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="view-status-container">
      <br></br>
      <br></br>
      <h1>View Status</h1>
      
      {statusData.length === 0 ? (
        <p>No status updates available.</p>
      ) : (
        <table className="status-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Complaint Text</th>
              <th>Location</th>
              <th>SubLocation</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {statusData.map((status) => (
              <tr key={status._id}>
                <td>{new Date(status.updatedAt).toLocaleDateString()}</td>
                <td>{status.complaintId?.complaintText}</td>
                <td>{status.complaintId?.location}</td>
                <td>{status.subLocation}</td>
                <td>{status.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
      <button
        onClick={handleAddComplaint}
        className="add-complaint-button"
      >
        + Add New Complaint
      </button>
      <br></br>
      <button
        onClick={handleBack}
        className="back-button"
      >
        ← Back
      </button>
    </div>
  );
};

export default ViewStatus;
