import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { useEventContext } from '../context/EventContext';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isRegistered } = useAuth();
  const { events } = useEventContext();
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Planify</h1>
      {!isRegistered && (
        <p className="home-info">Please Register to view and add events.</p>
      )}
      <div>
        {isRegistered ? (
          <div className="event-grid">
            {events.map(event => (
              <EventCard
                key={event.id}
                event={event}
                isExpanded={expandedId === event.id}
                onToggle={() => handleToggle(event.id)}
              />
            ))}
          </div>
        ) : (
          <Link to="/register" className="form-button">
            Register Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
