import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the event ID from the URL
import { fetchData } from "../../utils/FetchData"; // Your utility to fetch data
import Loading from "../../components/Loading/Loading"; // Loading component
import ErrorDisplay from "../../components/Error/ErrorDisplay"; // Error component

function EventDetails() {
  const { id } = useParams(); // Get event ID from the URL
  const [event, setEvent] = useState(null); // State to store event details
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    // Function to fetch the event details
    const fetchEventDetails = async () => {
      setLoading(true);
      const { data, error } = await fetchData(
        `http://localhost:4000/api/event/${id}`
      ); // Fetch event by ID

      if (data) {
        setEvent(data); // Set event data if available
      } else {
        setError(error || "Event not found"); // Set error if data is not available
      }
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchEventDetails(); // Fetch the event details when the component mounts
  }, [id]); // Dependency array to run useEffect when `id` changes

  // If the data is still loading, show a loading spinner
  if (loading) return <Loading />;

  // If there is an error, show the error message
  if (error) return <ErrorDisplay message={error} type="danger" />;

  // If event data is not available, show a fallback message
  if (!event)
    return <ErrorDisplay message="Event details unavailable" type="danger" />;

  // Once the data is loaded, display the event details
  return (
    <div className="event-details-page">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>
        <strong>Location:</strong> {event.venue}
      </p>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Time:</strong> {event.time}
      </p>
      {/* Display other event details if available */}
    </div>
  );
}

export default EventDetails;
