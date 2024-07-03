import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faJs, faHtml5, faCss3, faJava } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

const Skills = () => (
  <div className="skills">
    <h2>Technical Skills</h2>
    <div className="skills-icons">
      <FontAwesomeIcon icon={faJs} size="2x" />
      <FontAwesomeIcon icon={faReact} size="2x" />
      <FontAwesomeIcon icon={faNode} size="2x" />
      <FontAwesomeIcon icon={faHtml5} size="2x" />
      <FontAwesomeIcon icon={faCss3} size="2x" />
      <FontAwesomeIcon icon={faJava} size="2x" />
      {/* Add other icons as needed */}
    </div>
  </div>
);

export default Skills;
