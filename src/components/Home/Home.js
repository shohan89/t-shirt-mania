import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
  const tshirts = useLoaderData();
  // using this state to update Add To cart value
  const [ cart, setCart ] = useState([]);
// Handle add to cart event through this event handler
  const handleAddToCart = tshirt => {
    const newCart = [ ...cart, tshirt ];
    setCart(newCart);
  }

  return (
    <div className='home-container'>
      <div className="tshirt-container">
        {
          tshirts.map( tshirt => <Tshirt key={ tshirts._id } tshirt={ tshirt } handleAddToCart={ handleAddToCart } /> )
        }
      </div>
      <div className="cart-container">
        <Cart cart={ cart } />
      </div>
      
    </div>
  );
};

export default Home;