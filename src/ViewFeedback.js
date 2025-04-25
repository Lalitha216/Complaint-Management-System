import React, { useEffect, useState } from "react";
import "./ViewFeedback.css"; // Ensure this file contains your CSS
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/feedback");
        if (!response.ok) {
          throw new Error("Failed to fetch feedbacks");
        }
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  if (loading) {
    return <p>Loading feedback...</p>;
  }

  return (
    <div className="view-feedback-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>Feedback Overview</h1>
      {feedbacks.length > 0 ? (
        <table className="feedback-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback._id}> {/* Use unique key */}
                <td>{feedback.date || "N/A"}</td>
                <td>{feedback.description || "Not provided"}</td>
                <td>{feedback.rating || "Not rated"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-feedback-message">No feedback available.</p>
      )}
    </div>
  );
};

export default ViewFeedback;
