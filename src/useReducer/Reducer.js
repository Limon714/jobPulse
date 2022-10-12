import React from 'react'
import { useReducer } from 'react';

const reducer = (state, action) => {
  if(action.type === 'increment'){
    return state + 1;
  }
if(action.type === 'decrement'){
    return state - 3;
  }
  if (action.type === 'decrementby4')
  {
    return state - 4;
  }

  return state;
}
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      
      <h1>Count {state} </h1>

      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
      <button onClick={()=>dispatch({type:"decrementby4"})}>decrement</button>
    </div>
  )
}

export default Reducer
