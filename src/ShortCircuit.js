import React, {useState} from 'react';
import './ShortCircuit.css';

const ShortCircuit = () =>{
const [text1,setText1] = useState('text');
const [text2,setText2] = useState('Hello');
const orCircuit = text1 || text2;
const [text3,setText3] = useState('text');
const [text4,setText4] = useState('Welcome');
const andCircuit = text3 && text4;

return <h1 className='we'> orCircuit: {orCircuit} AndCircuit: {andCircuit}</h1>
}

export default ShortCircuit;

