import React from 'react';
import myImage from './images/coxala-pics/Logo.jpeg';

const imageDetails = {
  'Logo.jpeg': { title: 'Logo', description: 'This is our logo' },
  // Add more image details as needed
};

function ImageComponent() {
  return (
    <div>
      <img src={myImage} alt="My Image" />
      <div>
        <h2>{imageDetails['Logo.jpeg'].title}</h2>
        <p>{imageDetails['Logo.jpeg'].description}</p>
      </div>
    </div>
  );
}

export default ImageComponent;