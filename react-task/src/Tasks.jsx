import React, { useState } from 'react'

const Tasks = () => {
    const [color,setColor]=useState('green');
    const [color2,setcolor2]=useState('yellow');
    const[clicked,setclicked]=useState(true);
    const changecolor=()=>{
        if(clicked){
            setColor('yellow')
            setcolor2('green')
        }
        else{
            setColor('green')
            setcolor2('yellow')
        }
        setclicked(!clicked)
    }
  return (
    <div>
        <div style={{background:color,width:'100px',height:'100px'}} onClick={changecolor}></div>
        <div style={{background:color2,width:'100px',height:'100px'}} onClick={changecolor}></div>
      
    </div>
  )
}

export default Tasks







