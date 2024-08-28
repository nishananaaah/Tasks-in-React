import React from 'react'
import Usecounter from '../Hooks/Usecounter'

const Countertwo = () => {
   const [count,increment,decrement,reset]=Usecounter(10,10)

  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>

      
    </div>
  )
}

export default Countertwo
