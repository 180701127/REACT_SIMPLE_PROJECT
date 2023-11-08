import React, { useContext } from 'react'
import { Container } from './CounterReducer'

const FComponent = () => {
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
      <span className='jk'> {countstate.count} </span>
      <button onClick={decrHandler}> Sub </button>
      
    </div>
  )
}

export default FComponent
