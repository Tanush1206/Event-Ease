import React from 'react';
import { useEventContext } from '../context/EventContext';

const EventCard = ({ event, isExpanded, onToggle }) => {
  const { deleteEvent } = useEventContext();

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(event.id);
    }
  };

  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      {isExpanded && (
        <p className="event-description">
          {event.description.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      )}
      <button className="event-details-link" onClick={onToggle}>
        {isExpanded ? 'Hide Description' : 'View Description'}
      </button>
      <br />
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default EventCard;
