import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Error.css';
const Error = () => {
  return (
    <div>
        <h1 className='o'>Page Not Found</h1>
         <Link to='/MyPages' className='f'> GO BACK TO HOME PAGE </Link>
      
    </div>
  )
}

export default Error
