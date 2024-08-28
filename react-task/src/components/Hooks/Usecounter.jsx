import {useState} from 'react'

const Usecounter = (initialcount=0,value) => {

    const [count,setCount]=useState(initialcount);
    const increment=()=>{
        setCount(count+value);
    }
    const decrement=()=>{
        setCount(count-value);
    }
    const reset=()=>{
      setCount(initialcount);
    }

  return [count, increment,decrement,reset]
}

export default Usecounter
