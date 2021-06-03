//import { Router } from './components/Route/Router'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Dashboard from './components/AuthLogin/Dashboard'
import Preferences from './components/AuthLogin/Preferences'
import './App.css'
import Login from './components/AuthLogin/Login'
import userToken from './components/AuthLogin/UseToken'
import Home from './components/Home'

// function setToken(userToken) {  deleted after copying to userToken
//   sessionStorage.setItem('token', JSON.stringify(userToken))
// }

// function getToken() {
//   const tokenStr = sessionStorage.getItem('token')
//   const userToken = JSON.parse(tokenStr)
//   return userToken?.token
// }

function App() {
  //const [token, setToken] = useState() this delete
  //const token = getToken() // this added with 2 func (setToken, getToken) => changed to str-22
  const { token, setToken } = userToken()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav justify-content-center">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/preferences">
                Preferences
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
