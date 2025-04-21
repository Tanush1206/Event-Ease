// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(
    localStorage.getItem('userRegistered') === 'true'
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  useEffect(() => {
    const handleStorage = () => {
      setIsRegistered(localStorage.getItem('userRegistered') === 'true');
      setUser(JSON.parse(localStorage.getItem('user')) || null);
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const register = (userObj) => {
    localStorage.setItem('user', JSON.stringify(userObj));
    localStorage.setItem('userRegistered', 'true');
    setUser(userObj);
    setIsRegistered(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userRegistered');
    setUser(null);
    setIsRegistered(false);
  };

  return (
    <AuthContext.Provider value={{ isRegistered, user, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
