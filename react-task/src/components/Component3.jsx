import React, { useContext } from 'react'
import { userContext } from './Context'

const Component3 = () => {
    const {count}=useContext(userContext)
  return (
    <div>
        <h1>counter value in third component:{count}</h1>
      
    </div>
  )
}

export default Component3
