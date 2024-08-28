import React, { useContext } from 'react'
import { userContext } from './Maincompo'

const Compo3 = () => {
  const {counter2,setCounter2,color,setColor}=useContext(userContext)
  return (
    <div>
      <h1>component3 counter :{counter2}</h1>
      <button onClick={()=>setCounter2(counter2+1)}>counter 2</button>
      <div style={{background:color,width:'100px',height:'100px'}}></div>
      <button onClick={()=>setColor('blue')}>change the color</button>
    </div>
  )
}

export default Compo3
