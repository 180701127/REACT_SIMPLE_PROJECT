import { createStore } from "redux";
const reducerFn = (state = { count: 0 }, action) => {
  if (action.type == "+") {
    return { count: state.count + 1 };
  } else if (action.type == "-") {
    return { count: state.count - 1 };
  } else if (action.type == "*") {
    return { count: state.count * action.payload };
  } else {
    return state;
  }
};
const store = createStore(reducerFn);
export default store;
