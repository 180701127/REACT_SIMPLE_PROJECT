import React, { useState } from 'react';
import './Show-hide-Component.css';

function ShowAndHideComponent() {

    const[show , setShow] = useState(false);

  return (
    <div>
      <button onClick={()=>{setShow(!show)}}>HideAndSeek</button>
      {/* {show?<Book/>:<h1>Error</h1>} */}
      {show&&<Book />}
    </div>
  )
}

const Book = () => {
    return (
      <article className='book'>
        <Image />
        <Title />
        <Author />
      </article>
    );
  };
  
const Title = () => {
    return <h3 className='hj'>A Man Called Ove</h3>
  };
  const Author = () => {
    return <h4><i className='jl'>Fredric BackMan</i></h4>
  };
  const Image = () => {
    return <img src='https://m.media-amazon.com/images/I/81DXIOk9glL._SY466_.jpg' alt='book' style={{width:'200px',height:'200px'}}/>
  };

export default ShowAndHideComponent;
