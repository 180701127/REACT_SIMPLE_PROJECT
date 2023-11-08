import React, { createContext, useReducer } from "react";
import AComponent from "./AComponent";
import BComponent from "./BComponent";
import CComponent from "./CComponent";

import '../ReducerContext/CounterReducer.css';

export const Container = createContext();

const Counter = () => {
  var [state, dispatcher] = useReducer(reducer, { count: 0 });
  const IncrHandler = () => {
    dispatcher("Add");
  };
  const decrHandler = () => {
    dispatcher("Sub");
  };
  function reducer(currState, action) {
    switch (action) {
      case "Add":
        return { count: currState.count + 1 };
        
      case "Sub":
        return { count: currState.count - 1 };

      default:
        return {count:0};  
        
    }
  }
  return (
    <>
      <button onClick={IncrHandler}> Add </button>
      
      <span className="hg"> {state.count} </span>
      <button onClick={decrHandler}> Sub </button>
      <h1 className="yu">This is AComponent</h1>
      <div>
        <Container.Provider value={{countstate:state,countdispatch: dispatcher}}>
        <AComponent></AComponent>
        <BComponent></BComponent>
        <CComponent></CComponent>
        </Container.Provider>

      </div>
    </>
  );
};
export default Counter;
