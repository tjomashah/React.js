const initialstate = {
  data: '',
}

function reducer(state = initialstate, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        data: action.data,
      }
    default:
      return state
  }
}

export default reducer
