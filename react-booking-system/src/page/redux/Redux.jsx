import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement} from './reducers'

function Redux() {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Counter {counter}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            {isLogged ? <h4>I dont see you</h4> : ''}
        </div>
    )
}

export default Redux