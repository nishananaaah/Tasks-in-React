import React, { useState } from 'react'

const Task = () => {
    const [text,settext]=useState("")
    const [color,setColor]=useState("red")
  return (
    <div>
        <input type="text" onChange={(e)=>{
          settext(e.target.value) 

        }} />
        <div style={{width:"100px",height:"100px",backgroundColor:color}}></div>
        <button onClick={()=>{
            setColor(text)
        }}>submit</button>
      
      
    </div>
  )
}

export default Task
