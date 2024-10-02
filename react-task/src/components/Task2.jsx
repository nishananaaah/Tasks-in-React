import React from 'react'

const Task2 = (props) => {
    const listofcolors=props.name.map((names)=>
        <li key={names}>{names}</li>
    )
    const onChange=(e)=>{
      console.log(e.target.value)
    }
  return (
    <div>
      <input type="text" onChange={onChange} />
      <ul>{listofcolors}</ul>
    
    </div>
  )
}

export default Task2
