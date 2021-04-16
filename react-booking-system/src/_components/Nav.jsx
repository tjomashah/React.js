import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark" style={{display: 'flex', 
        justifyContent: 'center'}}>
            <div className="navbar-nav" >
                <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/users" className="nav-item nav-link">Customers</NavLink>
                <NavLink to="/rooms" className="nav-item nav-link">Rooms</NavLink>
                <NavLink to="/reservation" className="nav-item nav-link">Reservation</NavLink>
                <NavLink to="/page" className="nav-item nav-link">Page</NavLink>
            </div>
        </nav>
    );
}

export { Nav };