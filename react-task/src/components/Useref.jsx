import React, { useEffect, useState } from 'react'

const Useref = () => {
    const ref =Useref(0);

    const [number, setnumber] = useState(0)
    useEffect(() => {
        console.log("you are passed")
    })
    const clickhandler = () => {
        ref.current++;
        console.log(ref.current);
      
    }

    return (
        <div>

            <button onClick={clickhandler}>click me</button>

        </div>
    )
}

export default Useref
