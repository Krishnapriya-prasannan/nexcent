import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import "../styles/Navbar.css"; // Import CSS
import logo from "../assets/Logo.png"; // Import logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    // Prevent scrolling when menu is open
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop & Mobile Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/">Features</a></li>
          <li><a href="/">Community</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Pricing</a></li>
          <li className="nav-button">
            <a href="/" className="register-btn">Register Now →</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
