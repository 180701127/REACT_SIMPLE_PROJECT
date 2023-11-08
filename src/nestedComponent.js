import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

const BookList=()=>{
return (
    <session className="booklist">
        <Book/>
        <Book/>
        <Book/>
    </session>
    );
};

const Book=()=>{
    return (
        <article className='book'>
            <Title/>
	        <Image/>
	        <Author/>
        </article>
        );
    };
const Title=()=>{
return(
<div>
	<p className='x'>Harry Potter and the soccesser stone </p>
</div>
)
};
const Image=()=>{
return(
<div>
	<img src="https://m.media-amazon.com/images/I/51xJbFMRsxL.jpg" alt="book" style={{width:'200px',height:'200px'}} />
</div>
)
};
const Author=()=>{
return(
<div>
	<i style={{fontSize:'0.75rem', marginTop:'0.25rem',backgroundColor:'white'}}> JK Rowling</i>
</div>
)
};
ReactDOM.render(<BookList/>, document.getElementById('root'));
export default BookList