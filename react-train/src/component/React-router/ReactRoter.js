import React from 'react'
import './Router.css'
import Nav from './Nav'
import About from './About'
import Contact from './Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function ReactRouter() {
    return (
        <Router>
            <div className="router">
                <Nav />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => {
    return (
    <div>
        <h1>Home Page</h1>
    </div>
    )
}

export default ReactRouter