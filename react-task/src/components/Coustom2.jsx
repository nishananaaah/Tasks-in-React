import React from 'react'
import { useState,useEffect } from 'react'
import Usedoctitle from './Hooks/Usedoctitle';

const Coustom2 = () => {
  const [count,setCount]=useState(0);
Usedoctitle(count);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Counter:{count}</button>
      
    </div>
  )
}

export default Coustom2