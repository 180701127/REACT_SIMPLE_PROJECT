import {configureStore, createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
name: 'CounterToolKit',
initialState: {count:0},
reducers: {
IncHandler(state,action){
state.count = state.count+1;
},
decHandler(state,action){
state.count =state.count-1;
},
mulHandler(state,action){
state.count =state.count*action.payload;
}
}
})
export const actions = counterSlice.actions;
const store = configureStore({
reducer:counterSlice.reducer
})
export default store;