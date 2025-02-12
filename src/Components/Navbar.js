import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Menu icons
import "../styles/Navbar.css"; // Import CSS
import logo from "../assets/Logo.png"; // Import logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="Nexcent Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/">Features</a></li>
          <li><a href="/">Community</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Pricing</a></li>
          <div className="nav-button">
          <a href="/" className="register-btn">Register Now →</a>
        </div>
        </ul>

       

        {/* Mobile Menu Toggle */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
