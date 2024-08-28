import React from 'react'
const Listkeys = (props) => {
  const listItems = props.fruits.map((fruit) =>
  <li key={fruit}>{fruit}</li>
);
  return (
    <div>
      <ul>{listItems}</ul>
    
   </div>
  )
}

export default Listkeys
