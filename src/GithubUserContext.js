import React, { useEffect, useState, createContext, useContext } from 'react';

const container = createContext();

const url = 'https://api.github.com/users';
const GithubContext = () => {
    const [users,setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(false);
    const getUsers = async()=>{
        const response =await fetch(url);
        const data =await response.json();
        setUsers(data);
        // console.log(data);
    }
    useEffect(()=>{
        getUsers();
    },[]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        var newResult = users.find((p)=>{
            return p.login === search
        });

        if(newResult){
            setResult(newResult);
        }else{
            setError(true);
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
            <button type='submit'>Search</button>
        </form>

        <container.Provider value={{result,users}}

        {...result&&<SearchedData />}
        {...error&&<h1>Not Found</h1>}

        

        
        
      
    </div>
  )
}

const SearchedData = () =>{
    if(result !== null){
        const {result} = useContext(container);
        const {login, html_url, avatar_url} = result;

    
    

    return(
        <>
        {result !== null?<div className='card'>
            <img src={avatar_url} alt='No Image Found' />
            <div className='container'>
                <a href={html_url} target='_blank'><h1>{login}</h1></a>
            </div>
        </div>:<h1>Not Found</h1>}
        </>)
    }
    else{
        return (<h1>Enter Proper Details</h1>)
    }

}




const AllUsers = ()=>{
    const {users} = useContext(container);
    return (
        <>
        {users.map((data)=>{
            const {id,login,html_url,avatar_url} = data;
            return (
                <div key={id} className='card'>
                    <img src={avatar_url} alt='Not Found'></img>
                    <div className='container'>
                        <a href={html_url} target='_blank'>{login}<h1>{login}</h1></a>
                    </div>
                </div>
            )
        })}
        
        
        </>
    )
}
export default GithubContext;

