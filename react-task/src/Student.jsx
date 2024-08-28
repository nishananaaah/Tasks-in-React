import React from 'react'

const Student = (props) => {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h1>Age:{props.age}</h1>
      <h1>Student:{props.student?'YES':'NO'}</h1>

    </div>
  )
}

export default Student
