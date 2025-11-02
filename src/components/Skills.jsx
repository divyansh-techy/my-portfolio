// src/components/Skills.jsx

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa';

// Import all the icons we need
import { 
  IoLogoJavascript, 
  IoLogoReact, 
  IoLogoNodejs 
} from 'react-icons/io5';
import { 
  SiExpress, 
  SiNestjs, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiGit 
} from 'react-icons/si';

// Create the skills data array
const skillsData = [
  { icon: <IoLogoJavascript />, title: "Node.js", percentage: 95 },
  { icon: <IoLogoReact />, title: "React.js", percentage: 90 },
  { icon: <IoLogoNodejs />, title: "Next.js", percentage: 90 },
  { icon: <SiExpress />, title: "Express.js", percentage: 90 },
  { icon: <SiNestjs />, title: "NestJS", percentage: 85 },
  { icon: <SiMongodb />, title: "MongoDB", percentage: 90 },
  { icon: <SiPostgresql />, title: "PostgreSQL", percentage: 85 },
  { icon: <FaAws />, title: "AWS", percentage: 80 },
  { icon: <SiDocker />, title: "Docker", percentage: 80 },
  { icon: <SiGit />, title: "Git", percentage: 95 }
];

const accentColor = "#ff6600";

function Skills() {
  return (
    <motion.section id="skills" className="skills-section"
    // Instead of 'scale', use 'x' (for horizontal movement)
    initial={{ opacity: 0, x: 100 }} // Starts 100px to the left
    whileInView={{ opacity: 1, x: 0 }} // Animates to its normal spot
    transition={{ duration: 1 }} // No spring needed here
    // viewport={{ once: true }}
    >
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-progress-container">
              <CircularProgressbar
                value={skill.percentage}
                styles={buildStyles({
                  pathTransitionDuration: 0.5,
                  pathColor: accentColor,
                  trailColor: '#e0e0e0',
                  textColor: 'transparent', 
                })}
              />
              <div className="skill-icon">
                {skill.icon}
              </div>
            </div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-percentage">{skill.percentage}%</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;