import { BrowserRouter, Link, Route, Switch, NavLink } from 'react-router-dom'
import Importer from './components/Importer/Importer'
import Invoices from './components/Invoices/Invoices'
import Notifications from './components/Notifications/Notifications'
import Banks from './components/Banks/Banks'
import Templates from './components/Templates/Templates'
import Login from './components/AuthLogin/Login'
import userToken from './components/AuthLogin/UseToken'
import './App.css'
import Header from './components/Header'

function App() {
  const { token, setToken } = userToken()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <nav className="nav justify-content-center">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                exact
                className="active"
                className="nav-link"
                to="/importer"
              >
                Importer
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="active"
                className="nav-link"
                to="/invoices"
              >
                Invoices
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="active"
                className="nav-link"
                to="/notifications"
              >
                Notifications
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="active"
                className="nav-link"
                to="/banks"
              >
                Banks
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="active"
                className="nav-link"
                to="/templates"
              >
                Templates
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/importer">
            <Importer />
          </Route>
          <Route path="/invoices">
            <Invoices />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/banks">
            <Banks />
          </Route>
          <Route path="/templates">
            <Templates />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
