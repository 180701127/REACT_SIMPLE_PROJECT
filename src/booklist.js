import './index.css';
import {books} from './book';
import Book from './books';
import React from 'react';



const booklist=()=>{
    return(
        <section className='booklist'>
            {books.map((books)=>{
                return(
                    <Book {...books} key = {books.id}/>

                ) 
        })};
        </section>
    );
};

export default booklist;
