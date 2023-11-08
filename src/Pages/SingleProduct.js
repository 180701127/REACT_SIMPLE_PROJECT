import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { books } from '../book';

const SingleProduct = () => {
     const {bid} = useParams();
     var book = books.find((b)=>{
        return b.id == bid;

    });
    console.log(book);
    const {title,author,imgPath} = book;
  return (

    
    
    <div>
      <img src={imgPath}></img>
      <h1 className='h'>{title}</h1>
      {/* <p> The product id is {id}</p> */}
      <h2 className='h'>{author}</h2>
      <Link className='h' to={'/products'}>Products</Link>
      
    </div>
  )
}

export default SingleProduct;
