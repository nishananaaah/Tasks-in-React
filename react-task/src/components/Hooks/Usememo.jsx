import React, { useState } from 'react'

const Usememo = () => {
    const [count,setCount]=useState(0);
    // const [count2,setCount2]=useState(0);
    const increment1=()=>{
        setCount(count+1);
    }
    // const increment2=()=>{
    //     setCount2(count2+1)
    // }
    
        const EvenOdd=count%2===0
    
  return (
    <div>
        <button onClick={increment1}>counter one :{count}</button>
        <span>{EvenOdd?'even':'odd'}</span>
        <div style={{background:EvenOdd?'red':'green',width:'100px',height:'100px'}}></div>
        {/* <button onClick={increment2}>counter two :{count2}</button> */}


      
    </div>
  )
}

export default Usememo
