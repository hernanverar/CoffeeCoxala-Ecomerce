import React from 'react';
import "../pages/styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className="footer">
        <h1>Please visit our social media!</h1>
        <div className="socialMedia"> 
        <InstagramIcon /> <FacebookIcon />
        </div>
        <p> &copy: 2023 Hernanverar.com</p>
      </div>
  )
}

export { Footer };
