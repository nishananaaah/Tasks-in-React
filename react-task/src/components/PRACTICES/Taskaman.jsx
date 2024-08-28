import React, { useReducer } from 'react'


const initialvalue=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+=1 
    }

}

const Taskaman = () => {
    const [state,dispatch]=useReducer(reducer,initialvalue)
    const even =state%2==0&&state>0;
  return (
    <div>
        
        <div style={{width:'100px',height:'100px',background:even?'red':'yellow'}}></div>
        <h1>count:{state}</h1>
        <button onClick={()=>dispatch('increment')}>increment</button>
      
    </div>
  )
}

export default Taskaman
