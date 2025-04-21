import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchEvents } from '../services/api';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    if (events.length === 0) {
      fetchEvents().then(apiEvents => {
        setEvents(apiEvents);
      });
    }
  }, []);

  const deleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  return (
    <EventContext.Provider value={{ events, setEvents, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => useContext(EventContext);
