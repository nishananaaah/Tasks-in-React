import React, { useState } from 'react'

const Change = () => {
    const [color,setColor]=useState('green');
   
  return (
    <div>
    <div>
        <button onClick={()=>setColor('blue')}>Blue</button>
      </div>
      <div style={{background:color , width:'100px',height:'100px',margin:'auto'}}></div>
    
    </div>
  )
}

export default Change
