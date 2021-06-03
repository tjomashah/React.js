import React from 'react';
import logo from '../images/logo.svg'
import './HomeStyles.css'

function Home() {
    return (
        <div className="home">
            <img className="home_logo animate__animated animate__fadeInDownBig" 
            src={logo} alt={'logo'}/>
            <h1 className="home_header animate__animated animate__fadeInLeftBig"
            >Hotel Booking</h1>
            <h4 className="home_subheader animate__animated animate__fadeInUpBig"
            >Are you looking for best hotels? Go on!</h4>
        </div>
    );
}

export { Home };