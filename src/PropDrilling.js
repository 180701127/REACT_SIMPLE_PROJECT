import React,{useState} from 'react';
import {people} from './people.js';
import List from './List.js';
import './PropDrilling.css';

const PropDrilling = () => {
    const [peoples,setpeoples] = useState(people);
  return (
    <div>
      <p className='h'>Prop Drilling</p>
      
      <p className='h'>List Component</p>
      <List className='h' people = {peoples}></List>
      
      
    </div>
  )
}

export default PropDrilling
