const SingleItem = ({ event }) => {
  return (
    <div className="event-details">
      <h2 className="event-name">{event.title}</h2>
      <p className="event-description">{event.description}</p>
      <p className="event-location">{event.venue}</p>
    </div>
  );
};

export default SingleItem;
