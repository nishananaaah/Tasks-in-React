import React from 'react'
import { useState } from 'react'
import Usedoctitle from './Hooks/Usedoctitle';

const Coustom = () => {
  const [count,setCount]=useState(0);
Usedoctitle(count);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Counter:{count}</button>
      
    </div>
  )
}

export default Coustom
