import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
//using usecallback but didnt add the button//
const Parentcomponent = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(5);
    const incrementcount1 = useCallback(() => {
        setCount(count + 1);
    }, [count])
    const incrementcount2 = useCallback(() => {
        setCount2(count2 + 1);
    },[count2])
    return (
        <div>
            <Title />
            <Count text="Counter1" count={count} />
            <button onClick={incrementcount1}>increment count1</button>
            {/* is have a button tag like <Button><Button/> */}
            <Count text="Counter2" count={count2} />
            <button onClick={incrementcount2}>increment count2</button>
        </div>
    )
}

export default React.memo(Parentcomponent)
