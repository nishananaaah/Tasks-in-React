import React, { useReducer } from 'react'

const initialValue = 0

function reducer(state,action){
    switch (action){
        case 'increment':
            return state+=1
}
}
const Logic = () => {
    const [state,dispatch] = useReducer(reducer,initialValue)
    const isEven = state%2==0&&state>0;
  return (
    <div>
      <div style={{width:'100px',height:'100px',background:isEven?'red':'green'}}>
              
      </div>
      
      <h2>Count: {state}</h2>
      <button onClick={()=>{
        dispatch('increment')
      }}>Increment</button>
      
    </div>
  )
}

export default Logic

