import { useDispatch, useSelector } from "react-redux";
import {actions} from './Store/indextoolkit';
import './ReduxCounter.css';
const ReduxCounter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const IncHandler = () => {
    dispatch(actions.IncHandler());
  };
  const decHandler = () => {
    dispatch(actions.decHandler());
  };
  const mulHandler = () => {
    dispatch(actions.mulHandler(10));
  };
  return (
    <>
      <button className="g" onClick={IncHandler}> ADD </button>
      <h1 className="u"> {count} </h1>
      <button className="j" onClick={decHandler}> SUB </button>
      <button className="k" onClick={mulHandler}> MULTIPLY BY 10 </button>
    </>
  );
};

export default ReduxCounter;
