import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import Register from './pages/Register';
import EventDashBoard from './pages/EventDashboard';
import { EventProvider } from './context/EventContext';
import './index.css';

function App() {
  return (
    <EventProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/event/:id" element={<EventDetails />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<EventDashBoard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </EventProvider>
  );
}

export default App;