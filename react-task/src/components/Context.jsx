import React, { createContext, useState } from 'react'
import Component2 from './Component2';
import Component3 from './Component3';
import Component1 from './Component1';


export const userContext = createContext()
const Context = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const arr = [1, 2, 3, 4, 5];
    const person = {
        name: "Nishana",
        age: 20,
    }
    const name="nishana";
    return (
        <div>
            <userContext.Provider value={{ count, setCount, count2, setCount2, arr,person,name }}>
                <Component2 />
                <Component3 />
                <Component1 />

            </userContext.Provider>

        </div>
    )
}

export default Context
