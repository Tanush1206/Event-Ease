import React from 'react';
import EventForm from '../components/EventForm';
import { useEventContext } from '../context/EventContext';

const EventDashboard = () => {
  const { events, setEvents } = useEventContext();

  const addEvent = (newEvent) => {
    const eventWithId = { 
      ...newEvent, 
      id: Date.now()
    };
    setEvents([...events, eventWithId]);
  };

  return (
    <div className="event-dashboard">
      <h2>Event Dashboard</h2>
      <p className="event-para">Add events as per your preferences and manage everything right from your dashboard!</p>
      <EventForm onSubmit={addEvent} />
    </div>
  );
};

export default EventDashboard;
