import React from 'react'
import Usecounter from '../Hooks/Usecounter'

const Counterone = () => {
 const [count,increment,decrement,reset] =Usecounter(0,1)
    
  return (
    <div>
        <h1>Counter :{count}</h1>
        <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    
    </div>
  )
}

export default Counterone
