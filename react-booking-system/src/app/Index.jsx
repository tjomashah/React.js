import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
// import "tailwindcss/tailwind.css"
import { Nav, Alert } from '@/_components';
import { Home } from '@/home';
import { Users } from '@/users';
import { Rooms } from '@/rooms';
import { Reservation } from '@/reservation';
import { Page } from '@/page'


function App() {
    const { pathname } = useLocation();  

    return (
        <div className="app-container bg-light">
            <Nav />
            <Alert />
            <div className="container pt-4 pb-4">
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <Route exact path="/" component={Home} />
                    <Route path="/users" component={Users} />
                    <Route path="/rooms" component={Rooms} />
                    <Route path="/reservation" component={Reservation} />
                    <Route path="/page" component={Page} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    );
}

export { App }; 