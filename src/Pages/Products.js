import React from 'react';
import { Link } from 'react-router-dom';
import { books } from '../book';

const Products=()=>{

    return
    (<>
    <h1> All Products </h1>
    <div>
        {books.map((p)=>{
            return <article key={p.id}>
                <h4> {p.title}</h4>
                <Link to={`/products/${p.id}`}> More Info... </Link>
                </article>
                })};
    </div>
    </>)
}


    
    
export default Products;

