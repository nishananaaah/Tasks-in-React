import React, { useContext } from 'react'
import { userContext } from './Context'

const Component1 = () => {
    const {count}=useContext(userContext)
  return (
    <div>

        <h1>COUNT :{count}</h1>
       
      
    </div>
  )
}

export default Component1
