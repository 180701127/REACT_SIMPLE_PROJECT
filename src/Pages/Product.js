import React from 'react';
import { Link } from 'react-router-dom';
const Product = () => {
  return (
    <div>
        <div><h1 className='h'>Welcome to Productpage</h1></div>
        <Link className='h' to='/MyPages'> GO BACK TO HOME PAGE </Link>
      
    </div>
  )
}

export default Product
