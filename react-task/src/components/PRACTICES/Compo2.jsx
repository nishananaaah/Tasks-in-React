import React from 'react'
import { useContext } from 'react'
import { userContext } from './Maincompo'

const Compo2 = () => {
  const {counter,arr2,person}=useContext(userContext);
  const listitems=arr2.map((array2)=>
    <li>{array2}</li>
  )
  return (
    <div>
      <h1>counter value:{counter}</h1>
      <ul>{listitems}</ul>
      <h1>the object is {person.name}</h1>
    </div>
  )
}

export default Compo2
