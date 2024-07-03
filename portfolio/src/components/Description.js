import React from 'react';
import './Description.css';

const Description = () => (
  <div className="description">
    <div className="text">
      <p> I am a passionate tech and development enthusiast currently in my final year, eagerly exploring various tech stacks and expanding my skills. I thrive on challenges and love to delve into innovative solutions that push boundaries in technology.
      </p>
    </div>
    <div className="profile-photo">
    <img src={`${process.env.PUBLIC_URL}/Profile_my.jpg`} alt="Aryandeep" />
    </div>
  </div>
);

export default Description;
