// src/components/Contact.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  // We'll add the Formspree functionality later.
  // For now, let's just build the form.
  
  // These 'state' variables will hold the form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <motion.section id="contact" className="contact-section"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ 
    duration: 1,
    type: "spring", 
    stiffness: 100 
  }}
//   viewport={{ once: true }}
    >
      
      {/* --- Section Titles --- */}
      <h2 className="section-title">Contact Me</h2>

      {/* --- Contact Form --- */}
      {/* We'll use a placeholder 'action' URL for now.
        This is what we will replace with Formspree.
      */}
      <form 
        action="https://formspree.io/f/YOUR_UNIQUE_ID" 
        method="POST" 
        className="contact-form"
      >
        
        {/* --- Name Field --- */}
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>

        {/* --- Email Field --- */}
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        {/* --- Message Field --- */}
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            name="message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required 
          ></textarea>
        </div>

        {/* --- Submit Button --- */}
        <button type="submit" className="btn btn-primary btn-full-width">
          Send Message
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;