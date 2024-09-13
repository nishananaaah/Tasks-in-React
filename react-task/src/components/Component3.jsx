import React, { useContext } from 'react'
import { userContext } from './Context'

const Component3 = () => {
    const {count}=useContext(userContext)
    const isEven=count%2==0;
  return (
    <div>
      <div style={{background:isEven?'red':'blue',width:'100px',height:'100px'}}></div>
      
    </div>
  )
}

export default Component3
