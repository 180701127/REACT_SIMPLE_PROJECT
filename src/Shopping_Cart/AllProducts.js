import React, { useState } from 'react'
import OneProducts from './OneProducts';
import { books } from '../book';

const AllProducts = () => {
    const [book,setbook] = useState(books);
    
    
  return (
    <div>
        {book.map((p)=>{
            return <OneProducts key={p.id} p={p}></OneProducts>
        })}
      
    </div>
  )
}

export default AllProducts
