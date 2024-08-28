import React from 'react'

const Title = () => {
    console.log("rendering component");
    
  return (
    <div>
        <h1>use callaback hook</h1>
      
    </div>
  )
}

export default  React.memo(Title)
