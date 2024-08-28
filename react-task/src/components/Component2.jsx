import React, { useContext } from 'react'
import { userContext } from './Context'

const Component2 = () => {
  const {count,setCount,count2,setCount2 ,arr} = useContext(userContext)
  return (
    <div>
        <h1>Component :{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>click counter</button>  
        <h1>2 counter:{count2}</h1>
    <button onClick={()=>setCount2((count2)=>count2+1)}>click counter</button>
    <h1>{arr}</h1>
  
    </div>
  )
}

export default Component2
