import React from 'react'
import { useReducer } from 'react'


const initialvalue= 0;
const reducer = (state, action) => {
    if(action==='add-to-cart'){
        return (state=state+1)
    }
    else if(action==='remove-from-cart'){
        return (state=state-1)

    }else if(action==='reset'){
        return initialvalue;
    }
    else{
        return state;
    }
  
}
const Reducer = () => {
   let [state,dispatch]= useReducer(reducer, initialvalue)
   
    return (
        <div>
            <h3>{state}</h3>
            <button onClick={()=>{dispatch('add-to-cart')}}>Add to cart</button>
            <button onClick={()=>{dispatch('remove-from-cart')}}>Remove from cart</button>
            <button onClick={()=>{dispatch('reset')}}>Reset</button>

        </div>
    )
}

export default Reducer
