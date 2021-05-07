import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './newRedux/Store'
import App from './App'

const store = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
)

// serviceWorker.unregister()

//===========================================

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { compose, createStore, applyMiddleware } from 'redux'
// import {Provider} from 'react-redux'
// import thunk from 'redux-thunk'
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import forbiddenWordsMiddleWare from './redux/middleware'
// import rootReducer from './redux/rootReducer'

// // import allReducers from './reducer'
// // import { Provider } from 'react-redux'

// const store = createStore(rootReducer, compose(
//   applyMiddleware(
//     thunk, forbiddenWordsMiddleWare
//   ),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ))

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

//========================================

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux'
// // import allReducers from './reducer'
// // import { Provider } from 'react-redux'

// const store = createStore(
//     allReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();
