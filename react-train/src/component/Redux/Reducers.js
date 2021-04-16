import { ADD_ARTICLE } from './Types'

const initialState = {
  articles: [],
}

function rootReducers(state = initialState, action) {
  if (action.types === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
    })
  }

  return state
}

export default rootReducers
