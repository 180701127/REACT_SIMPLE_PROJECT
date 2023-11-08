import React , {useContext}from 'react'
import {PersonContext} from './Context-API';
import './Person-info.css';

const PersonInfo = () =>{

    const data  = useContext(PersonContext);

    return (
        <>
        <h1 className='n'>Hello from consumer</h1>
        {data.data.map((data)=>{
            return <Show {...data} key={data.id}/>
        })}        
        </>
    )
}

const Show = ({id,name})=>{
    const data  = useContext(PersonContext);

    return (<>

        <p className='hj'>{id}{name}</p>
        <button onClick={()=>{data.removeItem(id)}}>Delete</button>
        
    </>)

}

export default PersonInfo;
