import React from 'react'
import { useReducer } from 'react'

const initialvalue=0;
const reducer=(state,action)=>{
    if(action==='increment'){
        return(state=state+1)
    }else if(action==='degrement'){
        return(state=state-1)
    }else if(action==='reset'){
        return initialvalue;
 }else{
    return state;
 }

}

const Logic2 = () => {
    let [state,dispatch]=useReducer(reducer,initialvalue)
  return (
    <div>
        <h1>Counter:{state}</h1>
        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('degrement')}>degrement</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
      
    </div>
  )
}

export default Logic2



