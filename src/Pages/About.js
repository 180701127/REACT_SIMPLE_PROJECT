import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/About.css';
const About = () => {
  return (
    <div>
        <div><h1 className='z'>Welcome to Aboutpage</h1></div>
        <Link to='/MyPages' className='l'> GO BACK TO HOME PAGE </Link>
      
    </div>
  )
}

export default About
