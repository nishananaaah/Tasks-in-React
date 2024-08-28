import React from 'react'
import { useReducer } from 'react'


const initialvalue= 0;
const reducer = (state, action) => {
   switch(action){
    case 'increment':
      return state+1 
      case 'decrement':
     return state-1
     case 'reset':
      return initialvalue
      default:
        return state   
   }
  
}
const Reducer = () => {
   const [state,dispatch]= useReducer(reducer, initialvalue);
   const [state2,dispatch2]=useReducer(reducer,initialvalue);
   
    return (
        <div>
            <h1>COUNTERONE:{state}</h1>
            <button onClick={()=>{dispatch('increment')}}>increment</button>
            <button onClick={()=>{dispatch('decrement')}}>decrement</button>
            <button onClick={()=>{dispatch('reset')}}>Reset</button>
         <div>
         <h1>COUNTERTWO:{state2}</h1>
         <button onClick={()=>{dispatch2('increment')}}>increment</button>
         <button onClick={()=>{dispatch2('decrement')}}>decrement</button>

         </div>


        </div>
    )
}

export default Reducer

