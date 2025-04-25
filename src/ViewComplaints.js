import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewComplaints.css"; // Assuming you have a CSS file for styling

const ViewComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();
  
  // Function to fetch complaints data from the backend
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/get-complaints"); // Replace with your backend API URL
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setComplaints(data); // Set fetched data to state
    } catch (err) {
      setError(err.message); // Set error message if the fetch fails
    }
  };
  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
  };

  
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };
  // Function to close the modal
  const closeModal = () => {
    setModalImage(null);
  };

  // useEffect to call fetchData when the component loads
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="view-complaints-container">
      <h1>Complaints</h1>
      {error && <p className="error">Error: {error}</p>}
      <table className="complaints-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Complaint</th>
            <th>Date</th>
            <th>Location</th>
            <th>Sub-Location</th>
            <th>Room Number</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {complaints.length > 0 ? (
            complaints.map((complaint, index) => (
              <tr key={index}>
                <td>{complaint.username}</td>
                <td>{complaint.complaintText}</td>
                <td>{new Date(complaint.date).toLocaleDateString()}</td>
                <td>{complaint.location}</td>
                <td>{complaint.subLocation || "N/A"}</td>
                <td>{complaint.roomNo || "N/A"}</td>
                <td>
          {complaint.image ? (
            <img
              src={complaint.image}
              alt="Complaint"
              style={{ width: "100px", height: "auto" }}
            />
          ) : (
            "No Image"
          )}
        </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No complaints found.</td>
            </tr>
          )}
        </tbody>
      </table>
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img src={modalImage} alt="Enlarged Complaint" className="modal-content" />
        </div>
      )}
      <button
        onClick={handleBack}
        className="back-button"
      >
        ← Back
      </button>
    </div>
    
  );
};

export default ViewComplaints;