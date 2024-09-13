import React, { useContext } from 'react'
import { userContext } from './Context'

const Component2 = () => {
  const {count,setCount} = useContext(userContext)
  return (
    <div>
      
      <button onClick={()=>setCount(count+1)}>increment</button>  
      
    
  
  
    </div>
  )
}

export default Component2
