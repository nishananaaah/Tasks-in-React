import React, { createContext, useState } from 'react'
import Compo1 from './Compo1'
import Compo2 from './Compo2'
import Compo3 from './Compo3'


export const userContext = createContext()
const Maincompo = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0)
  const arr = [1, 2, 3, 4, 5, 6];
  const arr2 = ["banana", "apple", "orange", "pappaya"];
  const [color,setColor]=useState('red');
  const person={
    name:"nishana",
    age:20
  }
  return (
    <div>
      <userContext.Provider value={{ counter, setCounter, counter2, setCounter2, arr, arr2 ,color,setColor,person}}>
        <Compo1 />
        <Compo2 />
        <Compo3 />
      </userContext.Provider>

    </div>
  )
}

export default Maincompo

