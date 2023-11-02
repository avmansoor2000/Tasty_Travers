import React from 'react';
import './style.css'

function ExampleCarouselImage({ text }) {
  return (
    <>
    <img
      className="img"
      src="https://www.livemint.com/lm-img/img/2023/07/12/1600x900/F0mVRPPacAICJm0_1689138352454_1689138366910.jpg"  // Replace with the actual image URL
      alt={text}
    />
    <img
      className="img"
      src="https://www.livemint.com/lm-img/img/2023/07/12/1600x900/F0mVRPPacAICJm0_1689138352454_1689138366910.jpg"  // Replace with the actual image URL
      alt={text}
      
    />
    <img
      className="img"
      src="https://www.livemint.com/lm-img/img/2023/07/12/1600x900/F0mVRPPacAICJm0_1689138352454_1689138366910.jpg"  // Replace with the actual image URL
      alt={text}
      
    />
    
    </>
  );
}

export default ExampleCarouselImage;
