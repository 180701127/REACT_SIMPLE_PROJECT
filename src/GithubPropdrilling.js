import React, { useEffect, useState } from 'react';
import Github from './Github';

const url = 'https://api.github.com/users';
const GithubPropdrilling = () => {
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
            // setResult(newResult=>{newResult.slice(0,1)});
            setResult(newResult);
            setError(false);
        }else{
            setResult(null);
            setError(true);
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label for="gsearch">Search</label>
            <input type="search" id="gsearch" name="gsearch" value={search} className='bn' onChange={(e)=>{setSearch(e.target.value)}} />
            <button type='submit'>Search</button>
        </form>
        
        
        {result&&<SearchedData result={result} />}
        {error&&<h1 className='h'>Not Found</h1>}

            <Github users={users}/>

        
        
      
    </div>
  )
}

const SearchedData = ({result}) =>{
    if(result !== null){
        const {login, html_url, avatar_url} = result;

    
    

    return(
        <>
        {result !== null?<div className='card'>
            <img src={avatar_url} className='qn' alt='No Image Found' />
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




const AllUsers = (prop)=>{
    return (
        <>
        {prop.users.map((data)=>{
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
export default GithubPropdrilling;

