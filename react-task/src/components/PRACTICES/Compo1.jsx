import React, { useContext } from 'react'
import { userContext } from './Maincompo'

const Compo1 = () => {
   
  const {counter,setCounter,arr} = useContext(userContext)
  const listitems=arr.map((array)=>
    <li>{array}</li>
  )
  
  return (
    <div>
        <h1>count:{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}> click counter</button>
      <ul>{listitems}</ul>
      
    </div>
  )
}

export default Compo1


