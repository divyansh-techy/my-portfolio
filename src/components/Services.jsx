// src/components/Services.jsx

import React from 'react';

// Step 1: Import icons
// We're using 'Boxicons' (bi) and 'Material Design' (md) icons.
import { BiSearchAlt, BiPalette, BiCodeAlt } from 'react-icons/bi';
import { MdOutlineScreenSearchDesktop, MdOutlinePhonelink, MdOutlineRocketLaunch } from 'react-icons/md';
import { motion } from 'framer-motion';

// Step 2: Create an array for our service data
const servicesData = [
  {
    icon: <BiSearchAlt />,
    title: "Research",
    description: "In-depth user research to understand needs, pain points, and behaviors."
  },
  {
    icon: <BiPalette />,
    title: "UI/UX Design",
    description: "Creating intuitive, beautiful, and user-friendly interfaces."
  },
  {
    icon: <MdOutlineScreenSearchDesktop />,
    title: "Wireframing",
    description: "Low-fidelity and high-fidelity wireframes to map out the user flow."
  },
  {
    icon: <MdOutlinePhonelink />,
    title: "Responsive Design",
    description: "Designs that work seamlessly across all devices, from mobile to desktop."
  },
  {
    icon: <BiCodeAlt />,
    title: "Prototyping",
    description: "Interactive prototypes that allow you to test and validate your designs."
  },
  {
    icon: <MdOutlineRocketLaunch />,
    title: "Usability Testing",
    description: "Testing with real users to find and fix usability issues."
  }
];

function Services() {
  return (
    // We'll use 'id="services"' for the navbar link eventually
    <motion.section id="services" className="services-section"
    initial={{ opacity: 0, x: -100 }} // Starts 100px to the left
    whileInView={{ opacity: 1, x: 0 }} // Animates to its normal spot
    transition={{ duration: 1 }} // No spring needed here
    // viewport={{ once: true }}
        >

      {/* --- Main Section Titles --- */}
      <h2 className="section-title">My Services</h2>

      {/* --- Services Grid --- */}
      <div className="services-grid">
        
        {/* Step 3: Loop through the 'servicesData' array
          This .map() will create a 'service-card' for each item in the array.
        */}
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
        
      </div>
    </motion.section>
  );
}

export default Services;