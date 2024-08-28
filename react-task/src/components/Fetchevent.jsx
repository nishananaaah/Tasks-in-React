import React from 'react'
// multiple ways of fetching events

const Fetchevent = () => {
    const fetchevent = (evt,extraparam) => {
        console.log("you are passed",evt.target);
        console.log("you created the green,",extraparam)
    }
    return (
        <div>
        {/* 1st way */}
            <button onClick={fetchevent}>Click ME</button>
            {/* 2nd way */}
            <button onClick={(event)=>fetchevent(event,"btn2")}>Click ME</button>
            {/* 3rd way */}
            <button onClick={fetchevent.bind(this,"btn3")}>Click ME</button>

        </div>
    )
}
export default Fetchevent
