import React from "react";
import Hours from '../assets/coxala-pics/Hours.jpeg';
import '../pages/styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <img src={Hours} alt="Hours of Coxala" className="contact-img" />
    </div>
  );
};

export default Contact;
