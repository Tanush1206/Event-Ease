import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import planifyLogo from "../assets/planify.png";

const Navbar = () => {
  const { isRegistered, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={planifyLogo} alt="Planify Logo" className="navbar-logo" />
        <div className="navbar-brand">Planify</div>
      </div>
      <div className="navbar-links">
        {isRegistered && (
          <>
            <span className="welcome-text">
              Welcome{user && user.name ? `, ${user.name}` : ""}!
            </span>
          </>
        )}
        <div className="dropdown">
          <button className="dropdown-toggle">
            <i className="fa-solid fa-gear">
              </i></button>
          <div className="dropdown-menu">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/admin">Dashboard</Link>
            {isRegistered && (
              <>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
