import React from 'react'

const Memocomponent = ({age}) => {
    console.log("rendering the memo component")
  return (
    <div>
        {age}
      
    </div>
  )
}

export default React.memo(Memocomponent)
