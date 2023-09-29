import React from 'react';
import "../pages/styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className="footer">
      <h1> Click here and follow us on social media for especial events!</h1>
      <div className="socialMedia"> 
        <a href="https://www.instagram.com/coxalacoffeegallery/?igshid=NGVhN2U2NjQ0Yg%3D%3D" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/coxalacoffeegallery?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
      </div>
      <p>&copy; 2023 Hernanverar.com</p>
    </div>
  )
}

export { Footer };
