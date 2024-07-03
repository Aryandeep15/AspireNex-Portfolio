import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="social-icons">
      <a href="https://wa.me/6202438184" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="https://www.instagram.com/aryandeep_15_07/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/aryandeep-383451227/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="mailto:aryandeep779@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
    <p>Web-Design by Aryandeep | All Rights Reserved © 2024</p>
  </footer>
);

export default Footer;
