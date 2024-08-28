import React, { useState } from 'react'
import Usedocument from '../Hooks/Usedocument';

const Doctitleone = () => {
    const [count, setCount] = useState(0);
    Usedocument(count)
   
    return (
        <div>

            <button onClick={() => setCount(count + 1)}>Count - {count}</button>

        </div>
    )
}

export default Doctitleone
