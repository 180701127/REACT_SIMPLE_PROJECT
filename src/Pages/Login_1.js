import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login_1=(props)=>{
  const {setUser} = props;
  const [fname, setFname] = useState('');
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const handleSubmit=(e)=>{
  e.preventDefault();
  if(!fname || !email){
  return;
  }else{
    setUser({fname:fname, email:email});
    navigate('/MyPages/dashboard')
  }
  }
  return(<>
  <form onSubmit={handleSubmit}>
  <label className='y'> Firstname </label>
  <input type="text" id="fname" name="fname" value={fname} onChange={(e)=>{setFname(e.target.value)}} />  <br />
  <label className='t'> Email </label>
  <input type="text" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> 
  
  <button> Login </button>
  </form>
  </>)
  }
  export default Login_1;

