import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Events.css"; // Add your custom styling here

const Events = () => {
  const [eventDetails, setEventDetails] = useState({
    date: "",
    department: "",
    title: "",
    venue: "",
    time: "",
    timePeriod: "AM",
    description: "",
  });

  const departments = [
    "CSE",
    "ECE",
    "EEE",
    "MECH",
    "CIVIL",
    "AI-DS",
    "IT",
    "AI-ML",
    "MBA",
  ];

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Event Details:", eventDetails);
    const eventDate = new Date(eventDetails.date);
    const currentDate = new Date();

    // Check if the event date is in the past
    if (eventDate <= currentDate) {
      alert("Event date cannot be in the past. Please select a future date.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/admin/post-event", eventDetails);
      if (response.data.success) {
        alert("Event Posted Successfully!");
        setEventDetails({
          date: "",
          department: "",
          title: "",
          venue: "",
          time: "",
          timePeriod: "AM",
          description: "",
        });
      }
    } catch (error) {
      console.error("Error posting event:", error);
      alert("Failed to post event");
    }
  };

  // Function to handle back navigation
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    
    <div className="events-container">
      <h1>Post an Event</h1>

      

      <form className="event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={eventDetails.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Organizing Department:</label>
          <select
            id="department"
            name="department"
            value={eventDetails.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="title">Event Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={eventDetails.title}
            onChange={handleChange}
            placeholder="Enter Event Title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="venue">Venue:</label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={eventDetails.venue}
            onChange={handleChange}
            placeholder="Enter Venue"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="time"
              id="time"
              name="time"
              value={eventDetails.time}
              onChange={handleChange}
              required
              style={{ marginRight: "10px" }}
            />
            <select
              id="timePeriod"
              name="timePeriod"
              value={eventDetails.timePeriod}
              onChange={handleChange}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description (Optional):</label>
          <textarea
            id="description"
            name="description"
            value={eventDetails.description}
            onChange={handleChange}
            placeholder="Enter Description (Optional)"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Post Event
        </button>
      </form>
      {/* Back Button */}
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default Events;