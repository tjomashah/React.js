import { createStore } from 'redux'
import rootReducers from './Reducers'
import { addArticles } from './Actions'

const store = createStore(rootReducers)

console.log(this.props.addArticles)

export default store
