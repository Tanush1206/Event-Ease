import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { isRegistered, register } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isRegistered) navigate('/');
  }, [isRegistered, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    register({ name, email });
    navigate('/');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          required
        />
        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
