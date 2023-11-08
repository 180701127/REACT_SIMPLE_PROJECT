import React, { useReducer } from "react";

const ReducerCounter = () => {
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
      <button onClick={IncrHandler}> + </button>
      <span> {state.count} </span>
      <button onClick={decrHandler}> - </button>
    </>
  );
};
export default ReducerCounter;
