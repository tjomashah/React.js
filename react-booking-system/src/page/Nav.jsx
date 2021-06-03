import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Router.css'

function Nav() {
    return (
        <nav>
            <div className="logo">
                <Logo />
            </div>
                <ul className="nav-links">
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                </ul>
        </nav>
    )
}

export default Nav 