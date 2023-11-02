import React from 'react'
import './foodList.css'
import RestaurantData from '../../Assets/restroData';
import {Link} from 'react-router-dom'


function resaurantCards() {

  const RestaurantCard = ({food,image}) => (
    <Link to="order" className='restaurant-link'>
      <div class="restaurant-cards" >
        <div className='restaurant-card' >
        <img className="restroImg" src={image} alt={food} />
        
        <p id='restaurant-info' class="restaurant-name">{food}</p>
        <p id='restaurant-info' class="restaurant-rating">Rating - 3.8</p>
        </div>
      </div>
      </Link>
      
      
    )
    
    const BodyComponent = () => {
      return (
        <div>
          <h1>FoodList</h1>
        <div className="body">
         
          <br />
          {RestaurantData.map((restaurant) => (
            <RestaurantCard  key={restaurant.food} {...restaurant} />
          ))}
        </div>
        </div>
      );
    };
return (
 
  <BodyComponent/>
 
  
)
}


export default resaurantCards