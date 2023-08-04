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
    const exists = cart.find( ts => ts._id === tshirt._id );
    if( exists ){
      alert( 'Item already added!!' );
    }
    else{
      const newCart = [ ...cart, tshirt ];
      setCart(newCart);
      // alert( 'Item successfully added!!' );
    }
  }

  // Handle remove event 
  const handleRemoveItem = tshirt => {
    const remaining = cart.filter( ts => ts._id !== tshirt._id );
    setCart( remaining );
  }

  return (
    <div className='home-container'>
      <div className="tshirt-container">
        {
          tshirts.map( tshirt => <Tshirt key={ tshirts._id } tshirt={ tshirt } handleAddToCart={ handleAddToCart } /> )
        }
      </div>
      <div className="cart-container">
        <Cart cart={ cart } handleRemoveItem={ handleRemoveItem } />
      </div>
      
    </div>
  );
};

export default Home;