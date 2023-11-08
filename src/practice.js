import React from 'react';
import ReactDOM from 'react-dom';
var Greeting = ()=> {
	
  return (
    <article>
    
  <div>
    <p>Hello</p>
    <h1>Hello</h1>
  </div>
  <ul>
    <li>Logesh</li>
  </ul>
  <Person></Person>
  <Message></Message>
  <img src="logo192.png" alt=''></img>
  </article>
  );
  
};
const Message = ()=>{
  return(
    <div>
      <p>He says good morning message</p>
      <b>Bye!</b>
    </div>
  )
  
}
const Person = ()=>{
  return(
    <div>
      <p className='h'>This is person details</p>
      <b className='y'>Bye!</b>
    </div>
  )
}




