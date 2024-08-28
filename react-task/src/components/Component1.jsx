import React, { useContext } from 'react'
import { userContext } from './Context'

const Component1 = () => {
    const {person,name}=useContext(userContext)
  return (
    <div>

        <h1>Object values:{person.name}</h1>
        <h1>name is {name}</h1>
      
    </div>
  )
}

export default Component1
