import React, { useEffect, useState } from "react";
import "./eventStyles.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SingleEvent from "../../components/SingleItem/SingleItem";
import axios from "axios";

function Event() {
  const [events, setEvents] = useState([]); // Default state as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch events from the API using Axios
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/event");
        setEvents(response.data.data); // Access 'data' property in the response
      } catch (err) {
        setError(err.message); // Set error message in case of failure
      } finally {
        setLoading(false); // Loading is done
      }
    };

    fetchEvents(); // Call the function to fetch events
  }, []);

  // Render the component
  return (
    <div className="EventPage">
      <NavBar />

      <div className="event">
        {/* Loading state */}
        {loading && <p>Loading events...</p>}

        {/* Error state */}
        {error && <p>Error: {error}</p>}

        {/* Events list */}
        {!loading && !error && Array.isArray(events) && events.length > 0
          ? events.map((event) => <SingleEvent key={event._id} event={event} />)
          : !loading && !error && <p>No events available at the moment.</p>}
      </div>

      <Footer />
    </div>
  );
}

export default Event;
