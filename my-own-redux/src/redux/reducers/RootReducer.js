import counterRed from './CounterRed'
import isLoggedRed from './isLoggedRed'
import { combineReducers } from 'redux'


const allReducers = combineReducers({
        counter: counterRed,
        logged: isLoggedRed
    }
)

export default allReducers