import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => (
  <div className="projects">
    <h2>Projects</h2>

    <div className="project-item">
      <div className="project-details">
        <p>Portfolio Website</p>
        <a href="https://github.com/Aryandeep15/Portfolio_website" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <img src={`${process.env.PUBLIC_URL}/port1.jpg`} alt="Portfolio Website" className="project-photo" />
    </div>

    <div className="project-item">
      <div className="project-details">
        <p>BlogPost Website</p>
        <a href="https://github.com/Aryandeep15/Portfolio_website" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <img src={`${process.env.PUBLIC_URL}/port2.png`} alt="BlogPost Website" className="project-photo" />
    </div>

    <div className="project-item">
      <div className="project-details">
        <p>Spotify Clone</p>
        <a href="https://github.com/Aryandeep15/Portfolio_website" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <img src={`${process.env.PUBLIC_URL}/photo2.png`} alt="Spotify Clone" className="project-photo" />
    </div>
  </div>
);

export default Projects;
