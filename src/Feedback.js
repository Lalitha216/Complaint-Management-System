import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from "axios";
import "./Feedback.css";

const Feedback = () => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/feedback", {
        date,
        description,
        rating,
      });

      console.log("Server Response:", response.data); // Log the response from the server

      if (response.data.success) {
        setMessage("Feedback submitted successfully!");
        setDate("");
        setDescription("");
        setRating("");
      } else {
        setMessage("Error submitting feedback. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server error. Please try again later.");
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="feedback-container">
      
      <h1>Feedback Form</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Feedback Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your feedback here..."
            required
          ></textarea>
        </label>
        <label>
          Rating:
          <select value={rating} onChange={(e) => setRating(e.target.value)} required>
            <option value="" disabled>
              Select Rating
            </option>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value} Star{value > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit Feedback</button>
        <button onClick={handleBack} className="back-button">
        ← Back
      </button>
      </form>
    </div>
  );
};

export default Feedback;
