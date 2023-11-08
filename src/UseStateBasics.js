import React, {useEffect,useState} from 'react';
import { people } from './people';
import './UseStateBasics.css';

var name = "Logesh";

const UStateBasics= () => {
  const [count,setCount] = useState(0);

  const [timeCount , setTimeCount] = useState(0);
  const [flag,setflag] = useState(0);
  const [size,setsize] = useState(window.innerWidth);
  var id = 0;
  

  useEffect(()=>{
    if(flag == false){
      window.addEventListener('resize',()=>{
        setsize(window.innerWidth)
      })
    
      

    }else if(flag == true){
      
      alert('deleted successfully');

      

      
      
    }
    else if(flag === 'start'){
      id = setInterval(()=>{
        setTimeCount((timeCount)=>timeCount+1);
      },1000)
      
    }
    return ()=>{
      window.removeEventListener('resize',()=>{setsize(window.innerWidth)});
      clearInterval(id);
    }
    
  },[flag]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Increment the count value
  //     setTimeCount((timeCount) => timeCount + 1);
  //   }, 1000); // Update every 1000 milliseconds (1 second)

  //       // Cleanup the interval on unmount or when the component is removed
  //       return () => {
  //         clearInterval(intervalId);
  //       };
  //     }, []);

 
  const [peoples, setPeople] = useState(people);
  const [object, setObject] = useState({
    id:1,name:'Logesh',message:'Hello'
  });
  const [crowd, setCrowd] = useState(people);
  var[fName,setfName] = useState('Logesh');

  const removeitem = (id)=>{
    var person = crowd.filter((person)=>{
      return person.id !== id;
    });
    setCrowd(person);

  }

  const changeofName = () =>{
    setfName("Robo");
    
  }

  const changeName = (n) =>{
    console.log(n);
  }
  const ChangeMsg =()=>{
    if(object.message === 'Hello'){
      setObject({...object,message:'Welcome EveryOne!'});
    } else{
      setObject({...object,message:'Hello'});
    }
  }

  return (
    
        <>
        {/* console.log(useState('Giri')); */}
        {peoples.map((person)=>{return <p className='hd'>{person.name}</p>})}
        <button onClick={()=>{setPeople([]);setflag(true)}}>Flushfully</button>
        {crowd.map((person)=>{return ( <div>
        <b className='h'>{person.name}</b>
        <button onClick={()=>{removeitem(person.id)}}>FlushOne</button>
        </div>
        )})}
        <h1 className='t'>{fName}</h1>
        <button onClick={changeofName}>Change Fname useState</button>
        <h1 className='a'>{name}</h1>
        <button onClick={()=>{changeName(name)}}>Change name Normal</button>
        <h1 className='e'>{object.id},{object.name},{object.message}</h1>
        {/* <button onClick={()=>{setObject({...object,message:"Welcome"});}}>ChangeMessage</button> */}
        <button onClick={ChangeMsg}>ChangeMessage</button>
        <h1 className='t'>Counter</h1>
        <h4 className='k'>{count}</h4>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setCount(count-1)}}>Decrease</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>

        <br></br>
        <h1 className='t'>Time Counter</h1>
        <h4 className='r'>{timeCount}</h4>
        {/* <button onClick={()=>{startCounter(timeCount)}}>Increase</button>
        <button onClick={()=>{clearCounter()}}>Decrease</button>
        <button onClick={()=>{setTimeCount(0)}}>Reset</button> */}

        <h1 className='c'>Windowsize:{size} px</h1>
        <h1 className='c'>Timer:{timeCount}</h1>
        <button onClick={()=>{setflag('start')}}>Start</button>


        </>
      
  )
}

export default UStateBasics;
