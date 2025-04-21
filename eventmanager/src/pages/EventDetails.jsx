import React from 'react';
import { useParams } from 'react-router-dom';
import { useEventContext } from '../context/EventContext';

const EventDetails = () => {
  const { id } = useParams();
  const { events } = useEventContext();
  const event = events.find(e => e.id.toString() === id);

  if (!event) return <div className="not-found">Event not found.</div>;

  return (
    <div className="event-details">
      <h1>{event.title}</h1>
      <p>Date: {event.date}</p>
    </div>
  );
};

export default EventDetails;