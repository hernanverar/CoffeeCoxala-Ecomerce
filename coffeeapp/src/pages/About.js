import React from 'react';
import AboutImg from '../assets/coxala-pics/AboutImg.jpeg';
import '../pages/styles/About.css'; // Import your CSS file

const About = () => {
  return (
    <div className="about-container"> {/* Add a container div */}
      <img src={AboutImg} alt="AboutImg of Coxala" className="about-img" />
    </div>
  )
}

export default About;

