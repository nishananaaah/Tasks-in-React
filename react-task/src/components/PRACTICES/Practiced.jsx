import React, { useReducer } from 'react'


const initialvalue = {
    firstcounter: 0,
    secondcounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ... state, firstcounter: state.firstcounter + action.value }
        case 'decrement':
            return { ... state, firstcounter: state.firstcounter - action.value }
    case 'increment2':
        return {...state,secondcounter:state.secondcounter+ action.value}
     case 'decrement2':
        return {...state,secondcounter:state.secondcounter-action.value}   
        case 'reset':
            return initialvalue
        default:
            return state

    }

}
const Practiced = () => {
    const [state, dispatch] = useReducer(reducer, initialvalue)
    return (
        <div>
            <h1>first countr:{state.firstcounter}</h1>
            <h1>second counter:{state.secondcounter}</h1>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>increment5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>decrement5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>increment counter2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>decrement counter2</button>
            </div>
        </div>
    )
}

export default Practiced

