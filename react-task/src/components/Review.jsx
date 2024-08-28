import React, { useState } from 'react'

const Review = () => {
  const [color,setColor]=useState('red')
  const [color2,setcolor2]=useState("blue")
  const[clicked,setclicked]=useState(true)


  const clickHandle=()=>{
  if(clicked){
     setColor("blue")
    setcolor2("red")
  }else{
   setColor("red")
   setcolor2("blue")
  }
  setclicked(!clicked)
  }

  return (
    <div>
      <div>
        {/* <button onClick={()=>setColor('blue')}>Blue</button> */}
      </div>
      <div style={{background:color , width:'100px',height:'100px',margin:'auto'}}
      onClick={clickHandle}></div>
     
      <div style={{background:color2 , width:'100px',height:'100px',margin:'auto'}}
      onClick={clickHandle}></div>
      
      
    </div>
  )
}

export default Review







