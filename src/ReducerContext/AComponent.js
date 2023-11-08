import React, { useContext } from 'react'
import { Container } from './CounterReducer';
import '../ReducerContext/AComponent.css';

const AComponent = () => {
    const {countstate,countdispatch} = useContext(Container);
    const IncrHandler = () => {
        countdispatch("Add");
      };
      const decrHandler = () => {
        countdispatch("Sub");
      };
  return (
    <div>
      <button onClick={IncrHandler}> Add </button>
      <span className='hg'> {countstate.count} </span>
      <button onClick={decrHandler}> Sub </button>
      <h1 className='jk'>This is BComponent</h1>
      <h1 className='jl'>This is DComponent</h1>
      
    </div>
  )
}

export default AComponent
