import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Importer from './components/Importer/Importer'
import Invoices from './components/Invoices/Invoices'
import Notifications from './components/Notifications'
import Banks from './components/Banks'
import Templates from './components/Templates'
import Login from './components/AuthLogin/Login'
import userToken from './components/AuthLogin/UseToken'
import './App.css'
import Header from './components/Header'

function App() {
  //const [token, setToken] = useState() this delete
  //const token = getToken() // this added with 2 func (setToken, getToken) => changed to str-22
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
              <Link className="nav-link" to="/importer">
                Importer
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/invoices">
                Invoices
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/notifications">
                Notifications
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/banks">
                Banks
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/templates">
                Templates
              </Link>
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
          <Route path="/banks">
            <Notifications />
          </Route>
          <Route path="/templates">
            <Banks />
          </Route>
          <Route path="/notifications">
            <Templates />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
