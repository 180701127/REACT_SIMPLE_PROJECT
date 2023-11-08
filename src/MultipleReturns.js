import React,{useEffect, useState} from 'react';
import './MultipleReturns.css';

const MultipleReturns =()=>{
    const url = 'api.github.com/users'
    const [isLoading, setIsLoading]=useState(false);
    const [isdata,setisdata] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users').then(
            (responce)=>{
                if(responce.status>=200 && responce.status <=299){
                    setIsLoading(true);
                    return responce.json()
                }else {
                    setIsLoading(false);
                    setisdata(false);
                    
                }
            }
                ).then((data)=>{
                    setIsLoading(false);
                        setUsers(data);
                        setisdata(true);
                        })	
                .catch((err)=>{console.log(err)})
        },[])
            

    if(isLoading){
        return <h2> Loading... </h2>
    }
    if(isdata){
        return  <div>
        {users.map((data)=>{
            const {id,login,html_url,avatar_url} = data;
            return (
                <div key={id}>
                    <img src={avatar_url} className='h' alt='Not Found'></img>
                    <h1 className='h'>{login}</h1>
                    <a href={html_url} target='_blank'>{login}</a>
                </div>
            )
        })}
      
    </div>
    }
    
    return <h2> Not Loading </h2>
    }
    
    export default MultipleReturns;