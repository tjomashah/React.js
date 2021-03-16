import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import State from './State';
import SetState from './SetState'
import Todos from './todo/Todos';
import Conditional from './Condition_Render/Conditional';
import Fetch_Request from './Fetch_Request'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    {/* <SetState /> */}
    {/* <Todos /> */}
    <Conditional /> 
    <Fetch_Request />
    </React.StrictMode>,
  document.getElementById('root')
);
