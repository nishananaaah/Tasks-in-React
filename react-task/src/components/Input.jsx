import React from 'react'

const Input = () => {
  const clickhandler =(e)=>{
    console.log(e.target.value)

  }
    
  return (
    <div>
      <input onChange={clickhandler}  type="text" />
      
    </div>
  )
}

export default Input
