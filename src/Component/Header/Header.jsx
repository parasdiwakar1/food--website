import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../Images/logo.png';
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src='https://i.ibb.co/RHLjm3Y/P-1-removebg-preview-1.png' alt="Logo" className="logo-img" />
        
      </div>

      {/* Hamburger Menu */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/AllFood" onClick={() => setMenuOpen(false)}>All Food</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </li>
        <li className="login-link">
          <Link to="/Login" onClick={() => setMenuOpen(false)}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
