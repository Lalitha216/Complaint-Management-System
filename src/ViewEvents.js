import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewEvents.css"; // Import styling
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const ViewEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch events from the backend when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/events"); // Adjust URL as needed
        if (response.data.success) {
          setEvents(response.data.events);
        } else {
          setError("Failed to fetch events");
        }
      } catch (err) {
        setError("Error fetching events");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-container">
      <h1>Upcoming Events</h1>
      <button className="back-button" onClick={() => navigate(-1)}>Back</button> {/* Back Button */}
      {loading && <p>Loading events...</p>}
      {error && <p>{error}</p>}
      <div className="events-list">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event._id} className="event-card">
              <h2>{event.title}</h2>
              <p className="event-detail"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p className="event-detail"><strong>Time:</strong> {event.time} {event.timePeriod}</p>
              <p className="event-detail"><strong>Department:</strong> {event.department}</p>
              <p className="event-detail"><strong>Venue:</strong> {event.venue}</p>
              <p className="event-detail"><strong>Description:</strong> {event.description || "No description available"}</p>
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  );
};

export default ViewEvents;