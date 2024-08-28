import React from 'react'
import { useReducer } from 'react'

const initialvalue=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increament':
            return state=state+1;
        case 'degreament':
            return state=state-1;
         case 'reset':
            return initialvalue;
        default :
           return state;   
    }

}

const Machine = () => {
    let [state,dispatch]=useReducer(reducer,initialvalue)
  return (
    <div>
        <h3> COUNT:{state}</h3>
        <button onClick={()=>{dispatch('increament')}}>increament</button>
        <button onClick={()=>{dispatch('degreament')}}>degreament</button>
        <button onClick={()=>{dispatch('reset')}}>Reset</button>
      
    </div>
  )
}

export default Machine
