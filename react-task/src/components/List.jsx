import React from 'react'

const List = (props) => {
    const listofcolors=props.colors.map((color)=>
    <li key={color}>{color}</li>
    )
  return (
    <div>
        <ul>{listofcolors}</ul>
      
    </div>
  )
}

export default List

