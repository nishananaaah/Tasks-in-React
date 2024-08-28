import React, { useState } from 'react'

const Practice = () => {
  const [name,setName]=useState('NISHANA');
  const myname=()=>{
    setName('FATHIMA')
  }
  const clickhandler=(e)=>{
    console.log(e.target.value)
  }
  
  return (
    <div>
      <h1>Name:{name}</h1>
    <button onClick={myname}>CHANGE NAME</button>
    <input onChange={clickhandler} type="text" />
    </div>
  )
}

export default Practice
