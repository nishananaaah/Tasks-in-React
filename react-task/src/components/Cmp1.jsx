import React, { useState } from 'react'

const Cmp1 = () => {
    const [name,setName]=useState('user')
    return (
        <div>
            <h1>Hello {name}</h1>
            <Cmp2 name={name}/>
             </div>
    )
}

const Cmp2=()=>{
    return(
        <div>
            <h1>component 2</h1>
            <Cmp3 name={name}/>
        </div>
    )
}
const Cmp3=()=>{
    return (
        <div>
            <h1>component 3</h1>
            <Cmp4  name={name}/>
        </div>
    )
}
const Cmp4=()=>{
    return(
        <div>
            <h1>component 4</h1>
            <Cmp5 name={name}/>
        </div>
    )
}
const Cmp5=()=>{
    return(
        <div>
            <h1>component 5</h1>
            <h2>Hello {name} again </h2>
        </div>
    )
}

export default Cmp1
