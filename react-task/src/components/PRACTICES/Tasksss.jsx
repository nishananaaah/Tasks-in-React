import React, { useState } from 'react'

const Tasksss = () => {
    const [value,setvalue]=useState(0);
  return (
    <div>
      
        <div style={{width:'30px',height:'30px',background:value>=1?'red':'black'}} onClick={()=>{
            setvalue(1)
        }}></div><br></br>
          <div style={{width:'30px',height:'30px',background:value>=2?'blue':'black'}} onClick={()=>{
            setvalue(2)
        }}></div>
        <br></br>
          <div style={{width:'30px',height:'30px',background:value>=3?'green':'black'}} onClick={()=>{
            setvalue(3)
        }}></div><br />
          <div style={{width:'30px',height:'30px',background:value>=4?'yellow':'black'}} onClick={()=>{
            setvalue(4)
        }}></div><br />
          <div style={{width:'30px',height:'30px',background:value>=5?'pink':'black'}} onClick={()=>{
            setvalue(5)
        }}></div>
      
      
    </div>
  )
}

export default Tasksss
