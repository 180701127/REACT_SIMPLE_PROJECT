import React from 'react'
import { Link } from 'react-router-dom';

import './Root.css';

const Root = () => {
  return (
    <div>
        <h1 className='v'>Welcome to Logesh project</h1>
        <Link to="/MyPages" className='h'>Click here to see my project</Link>
      
    </div>
  )
}

export default Root
