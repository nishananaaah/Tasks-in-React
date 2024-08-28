import React, { useState } from 'react'

const Rating = () => {
    const [value,setValue] = useState(0)
  return (
    <div>
      <div style={{width:'30px',height:'25px', background:value>=1?'yellow':'red'}} onClick={()=>{
        setValue(1)
      }}></div>
      <br/>
      <div style={{width:'30px',height:'25px', background:value>=2?'yellow':'red'}} onClick={()=>{
        setValue(2)
      }}></div>
      <br/>
      <div style={{width:'30px',height:'25px', background:value>=3?'yellow':'red'}} onClick={()=>{
        setValue(3)
      }}></div>
      <br/>
      <div style={{width:'30px',height:'25px', background:value>=4?'yellow':'red'}} onClick={()=>{
        setValue(4)
      }}></div>
      <br/>
      <div style={{width:'30px',height:'25px', background:value>=5?'yellow':'red'}} onClick={()=>{
        setValue(5)
      }}></div>
    </div>
  )
}

export default Rating
