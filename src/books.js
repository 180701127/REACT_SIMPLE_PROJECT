import './books.css';
const Book=(props)=>{
    console.log(props);

    function func(e){
        console.log(e);
        console.log(e.target);
    }

    const bookTitle = (title)=>{
        alert(`You selected the book with title ${title}`);
    }
    const {imgPath, title, author} = props;
    return (
        <article className='book'>
            <img src= {imgPath} alt="book" className='m' style={{width:'100px',height:'100px'}} onMouseOver={func} />
            <h1 className="u">{title}</h1>
            <i className="s">{author}</i>
            <button onClick={()=>{alert(`You selected the book with the author ${author}`)}}>Author</button>
            <button onClick={()=>{bookTitle(title)}}>Title</button>
            {/* {5+6-4}
            {4*5 === 20? 'TRUE': 'FALSE' }
            {title.toUpperCase()} */}
        </article>
        );
    };
// const Title=()=>{
//     return <h3>Harry potter and the soccesser stone</h3>
// };

// const Author=()=>{
//     return <h4><i>JK Rowling</i></h4>
// };

// const Image=()=>{
// return <img src="https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Book/dp/B017V4IMVQ/ref=sr_1_2?crid=29XK5QIAD53SQ&keywords=harry+potter+books&qid=1696476577&sprefix=harry%2Caps%2C308&sr=8-2" alt="book" style={{width: '200px', height: '200px'}} />
// };


export default Book;
