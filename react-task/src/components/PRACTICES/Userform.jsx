import React, { useState } from 'react'

const Userform = () => {
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const firstchange=(e)=>{
        setFirstname(e.target.value)
    }
    const lastchange=(e)=>{
      setLastname(e.target.value)
    }

    const submithandler= e =>{
        e.preventdefault()
        alert("nishana")
    }

  return (
    <div>
        <form onSubmit={submithandler}>
            <div>
                <label>First name</label>
                <input value={firstname}  onChange={firstchange} type="text" />
            </div>
            <div>
                <label>Last name</label>
                <input value={lastname}  onChange={lastchange} type="text" />
            </div>
        </form>
        <button>Submit</button>
      
    </div>
  )
}

export default Userform
