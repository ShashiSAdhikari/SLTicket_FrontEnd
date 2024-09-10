import React from "react";
import { useNavigate } from "react-router-dom";

function SingleEvent({ event }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${event._id}`); // Redirect to the event details page
  };

  return (
    <div onClick={handleClick} className="single-event">
      <div className="event-details">
        <h2 className="event-name">{event.title}</h2>
        <p className="event-description">{event.description}</p>
        <p className="event-location">{event.venue}</p>
      </div>
    </div>
  );
}

export default SingleEvent;
