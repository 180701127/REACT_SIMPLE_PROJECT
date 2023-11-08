import React, { useContext } from 'react'
import { Container } from './CounterReducer';
import '../ReducerContext/DComponent.css';

const DComponent = () => {
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
      <h1 className='hv'>This is CComponent</h1>
      <h1 className='jg'>This is EComponent</h1>
      <h1 className='bv'>This is FComponent</h1>
      
      
    </div>
  )
}

export default DComponent
