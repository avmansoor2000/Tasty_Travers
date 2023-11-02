import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'

function MyCarousel() {
  return (
 
    <Carousel className='food-list'>
      <div className='food-card'>
      <Carousel.Item>
        <img
          className="sample"
          src="https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="sample"
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="sample"
          src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt="Third slide"
        />
      </Carousel.Item>
      </div>
    </Carousel>
    
  );
}

export default MyCarousel;
