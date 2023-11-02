import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sampleCartItem  from '../Assets/cart-item'

function Cart() {
  const [cart, setCart] = useState([sampleCartItem]);
  

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Link to="/">Back to Menu</Link>
    </div>
  );
}

export default Cart;