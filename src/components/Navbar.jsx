// src/components/Navbar.jsx

import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <a href="#">Divyansh techy</a> 
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;