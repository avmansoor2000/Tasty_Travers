import React,{useState,useEffect} from 'react'
import RestaurantData from '../../Assets/restroData';
import {Link} from 'react-router-dom'
import './restro.css'
// import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
  return (
    <div className='banner'>
  
      <p>Flavors, Freshness, and Fast Delivery</p>
      <p>"Welcome to Tasty Traverse, where food and convenience unite. Explore a world of flavors from local to global favorites."</p>
    </div>
  );
}

// function Offer (){
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleScrollRight = () => {
//     setScrollPosition(scrollPosition - 1);
//   };

//   const handleScrollLeft = () => {
//     setScrollPosition(scrollPosition + 1);
//   };

//   return(
//     <div className='offer'>
//       <h3>Best offers for you</h3>

//       <div className='offer-list'>
//         <div className='image-container' style={{ transform: `translateX(${scrollPosition * 200}px)` }}>
//       <img className='offer-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/ca7347f1e49fad1dbe03d1dfa4aa02d2" alt="" />
//       <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/cc71243978bb0cb0e1c96a76e8e35dca" alt="" />
//       <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/a42e5ab90c4b2a10da47efc68f7d8061" alt="" />
//       </div>
//       </div>

//       <button className="left-arrow" onClick={handleScrollLeft}>
//         &lt; {/* Left arrow */}
//       </button>
//       <button className="right-arrow" onClick={handleScrollRight}>
//         &gt; {/* Right arrow */}
//       </button>

//      </div>
  
//   )
// }

function Offer() {
  const images = [
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/ca7347f1e49fad1dbe03d1dfa4aa02d2",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/cc71243978bb0cb0e1c96a76e8e35dca",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/a42e5ab90c4b2a10da47efc68f7d8061"
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollStep = 60; // Adjust the step according to your needs
  const autoScrollInterval = 1000; // Interval in milliseconds for auto-scrolling



  // Function to handle auto-scrolling to the right
  const autoScrollRight = () => {
    setScrollPosition(scrollPosition - 1);
    console.log(scrollPosition);
  };

  useEffect(() => {
    // Set up the auto-scrolling interval
    const autoScroll = setInterval(autoScrollRight, autoScrollInterval);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(autoScroll);
    };
  }, [scrollPosition]);

  return (
    <div className='offer'>
      <h3>Best offers for you</h3>

      <div className='offer-list'>
        <div className='image-container' style={{ transform: `translateX(${scrollPosition * scrollStep}px)` }}>
          {images.map((image, index) => (
            <img key={index} className='offer-img' src={image} alt="" />
          ))}
        </div>
      </div>

    </div>
  );
}



function resaurantCards() {

    const RestaurantCard = ({name,image}) => (
      <Link to="foodList" className='restaurant-link'>
        <div class="restaurant-cards" >
          <div className='restaurant-card' >
          <img className="restroImg" src={image} alt={name} />
          
          <p id='restaurant-info' class="restaurant-name">{name}</p>
          <p id='restaurant-info' class="restaurant-rating">Rating - 3.8</p>
          </div>
        </div>
        </Link>
        
        
      )
      
      const BodyComponent = () => {
        return (
          <div>
            <h1>Restaurant</h1>
          <div className="body">
           
            <br />
            {RestaurantData.map((restaurant) => (
              <RestaurantCard  key={restaurant.name} {...restaurant} />
            ))}
          </div>
          </div>
        );
      };
  return (
    <>
    <Banner/>
    <Offer/>
    <BodyComponent/>
    </>
    
  )
}

export default resaurantCards