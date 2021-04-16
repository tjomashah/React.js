import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import Contact from './Contact'
import './Router.css'

function Page() {
    return (
        <Router>
            <div className="router">
                <Nav />
                <Switch>
                    <Route path='/' exact component={myPage} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </div>
        </Router>
    )
}

const myPage = () => {
    return (
        <div>
            <h2>My Page</h2>
        </div>
    )
}

export { Page }