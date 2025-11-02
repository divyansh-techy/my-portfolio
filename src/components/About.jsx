// src/components/About.jsx

import React from 'react';

import { motion } from 'framer-motion';  //animation effect

// Import the profile pic again
import profilePic from '../assets/portfolio.png';

function About() {
  return (
    // This 'id' is very important for the navbar link to work!
    <motion.section
  id="about"
  className="about-section" // <-- Just the normal class

  // --- 4. Add these animation props ---

  // This is the "start" state (invisible and small)
  initial={{ opacity: 0, scale: 0.8 }}

  // This is the "animate-to" state when it enters the view
  whileInView={{ opacity: 1, scale: 1 }}

  // This adds the "bouncy" feel
  transition={{ 
    duration: 1,
    type: "spring", 
    stiffness: 100 
  }}

  // Only animate once
  viewport={{ once: true }}
    >
      
      {/* --- Main Section Titles --- */}
      <h2 className="section-title">About Me</h2>

      {/* --- Two-Column Container --- */}
      <div className="about-container">
        
        {/* --- Left Column (Image) --- */}
        <div className="about-image">
          <img src={profilePic} alt="divyansh" />
        </div>

        {/* --- Right Column (Text Content) --- */}
        <div className="about-content">
          <p>
            Hi! I’m a Full Stack Developer who loves building meaningful digital products using MERN and MEAN technologies. My focus goes beyond coding — I also apply SEO strategies to ensure every project performs well online. I’m constantly learning, exploring new tools, and striving to deliver creative, efficient, and scalable web solutions.
          </p>
          {/* We use the global button styles we already created! */}
          <a href="E:\my-portfolio\src\assets\resume" className="btn btn-primary">
            View Resume
          </a>
        </div>
      </div>

      {/* --- Stats Bar --- */}
      <div className="about-stats">
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">300+</span>
          <span className="stat-label">Happy Clients</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Hours Worked</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">2+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Awards Won</span>
        </div>
      </div>
    </motion.section>
  );
}

export default About;