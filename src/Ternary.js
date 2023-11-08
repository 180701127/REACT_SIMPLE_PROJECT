import React,{useState} from 'react'

const Ternary = () => {
    const [data,setData] = useState('');
    const [isError, setIsError] = useState(false);
    return(<>
        <h1 className='t'> {data || 'Hello'} </h1>
        {isError?<h1>Error</h1>:<h1 className='f'>Error</h1>}
        <button onClick={()=>{setIsError(!isError)}}> TOGGLE </button>
        </>)
}

export default Ternary
