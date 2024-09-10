import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SingleEvent from "../../components/SingleItem/SingleItem";
import { fetchData } from "../../utils/FetchData"; // Import the fetch function
import ErrorDisplay from "../../components/Error/ErrorDisplay"; // Import the error display component
import Loading from "../../components/Loading/Loading"; // Import the loading component
import { useTranslation } from "react-i18next"; // Import the hook to use translation

function Event() {
  const [events, setEvents] = useState([]); // Default state as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const { t } = useTranslation(); // Translation hook

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const { data, error } = await fetchData(
        "http://localhost:4000/api/event"
      );
      setEvents(data);
      setError(error);
      setLoading(false);
    };

    fetchEvents(); // Call the function to fetch events
  }, []);

  return (
    <div className="EventPage">
      <NavBar />

      <div className="event">
        {/* Loading state */}
        {loading && <Loading />}

        {/* Error state - assuming it's a danger type */}
        {error && <ErrorDisplay message={error} type="danger" />}

        {/* Events list */}
        {!loading && !error && Array.isArray(events) && events.length > 0
          ? events.map((event) => <SingleEvent key={event._id} event={event} />)
          : !loading && !error && <p>{t("event.no event available")}</p>}
      </div>

      <Footer />
    </div>
  );
}

export default Event;
