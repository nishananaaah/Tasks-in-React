import React, { useState } from 'react'

const Use = () => {
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const degrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
      <button onClick={degrement}>degrement</button>
    </div>
  )
}

export default Use;


