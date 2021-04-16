import Counter from './Counter'
import isLogged from './isLogged'
import { combineReducers } from 'react-redux'

const allReducers = combineReducers({
    counter: Counter,
    logged:  isLogged
})

export default allReducers