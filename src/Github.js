import React, { useEffect, useState } from 'react'
import './Github.css';

const url = 'https://api.github.com/users';
const Github = () => {
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
            <input type="text" name="search" value={search} placeholder="Search for a github user" onChange={(e)=>setSearch(e.target.value)} />
            {/* <h1 style={{color: 'yellow'}}>Welcome</h1> */}
           
            <button type="submit">Search</button>
        </form>

            {/* {result&&<SearchedData result={result}/>}
            {error&&<h1 className='j'>Not Found</h1>} */}
            {result && (
                <div>
                    <h2 className='j'>SearchedUser:</h2>
                    <img src={search.avatar_url} alt={search.login} />
                    <p>{search.login}</p>
                </div>
            )}
            <h1>Githubuser List:</h1>
            {users.map((data)=>
            {
                const {id,login,html_url,avatar_url} = data;
                return (

                    <div key={id}>
                        <img src={avatar_url} className='jk' alt='Not Found'></img>
                        <div>
                            <a href={html_url} target='_blank'>{login}<h1>{login}</h1></a>
                        </div>
                    </div>
                    )
            })}
      
    </div>
  )
}

const SearchedData = ({result}) =>{
    if(result !== null){
        const {login, html_url, avatar_url} = result;

    
    

    return(
        <>
        {result !== null?<div className='card'>
            <img src={avatar_url} alt='No Image Found' />
            <div className='container'>
                <a href={html_url} target='_blank'><h1 className='t'>{login}</h1></a>
            </div>
        </div>:<h1 className='r'>Not Found</h1>}
        </>)
    }
    else{
        return (<h1 className='e'>Enter Proper Details</h1>)
    }

}

export default Github
