import React from 'react';
import './WorkEx.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const WorkExperience = () => (
  <div className="work-experience">
    <h2>Work Experience</h2>
    <div className="experience-item">
      <div className="experience-details">
        <p>Web Developer at Bhagwati IAS Academy</p>
        <a href="https://bhagwatiiasacademy.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGlobe} size="2x" />
        </a>
      </div>
      <img src={`${process.env.PUBLIC_URL}/Photo1.jpg`} alt="Bhagwati IAS Academy" className="experience-photo" />
    </div>
  </div>
);

export default WorkExperience;
