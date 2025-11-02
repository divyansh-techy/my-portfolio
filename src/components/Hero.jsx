import React from 'react';
// Step 1: Import the image you just added.
// **Update the file name here to match your image!**
import profilePic from '../assets/portfolio.png'; 

function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* --- Left Column (Text) --- */}
      <div className="hero-content">
        <p className="hero-intro">Hi, I am</p>
        <h1 className="hero-name">Divyansh Upadhyay</h1>
        <h2 className="hero-title">Full-stack Developer</h2>
        <p className="hero-description">
          I’m a Full Stack Developer skilled in MERN and MEAN stacks, building fast, scalable web apps optimized with SEO best practices.
        </p>
        <a href="#contact" className="btn btn-primary">
          Hire Me
        </a>
        
        {/* We can add social links here later */}
      </div>

      {/* --- Right Column (Image) --- */}
      <div className="hero-image">
        <img src={profilePic} alt="divyansh" />
      </div>
    </section>
  );
}

export default Hero;