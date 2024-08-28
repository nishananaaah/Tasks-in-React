import React from 'react'

const Button = (handleClick) => {
    console.log(`rendering button-`,children);
    
  return (
    <div>
        <button onClick={handleClick}>
            
        </button>
      
    </div>
  )
}

export default Button
