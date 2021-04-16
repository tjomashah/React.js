import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import State from './component/State'
import SetState from './component/SetState'
import Todos from './component/todo/Todos'
import Conditional from './component/Condition_Render/Conditional'
import ReactRouter from './component/React-router/ReactRoter'
import PropState from './component/PropsState'
import Ref from './component/Ref'
import Axios from './component/Axios'
// import Fetch_Request from './Fetch_Request'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    <SetState />
    {/* <Todos /> */}
    {/* <Conditional />  */}
    {/* <Fetch_Request /> */}
    {/* <ReactRouter /> */}
    <PropState />
    <Ref />
    <Axios />
  </React.StrictMode>,
  document.getElementById('root'),
)
