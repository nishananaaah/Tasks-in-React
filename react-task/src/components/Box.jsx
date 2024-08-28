import React, { useState } from 'react'

const Box = () => {
  const [input, setInput] = useState('')
  const [item, setItem] = useState([]);
  function datasubmit(e) {
    e.preventDefault()
    setItem([...item, input])
  }
  return (
    <div>
      <form onSubmit={datasubmit}>
        <input onChange={(e) => setInput(e.target.value)} type="text" />
        <button type='submit'>submit</button>
        </form>
        {item.map((item,index)=>(
        <div key={index}>
          <h1>{item}</h1>
        </div>
        ))}


    </div>
  )
}

export default Box

