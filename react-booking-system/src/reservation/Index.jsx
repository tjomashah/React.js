import React, { Fragment } from 'react';
import Booking from './Booking';
import './ReservationStyles.css'

function Reservation() {
    return (
        <div className="reservation">
            <div className="reservation_content">
                <h2 className="reservation_content_header">Reservation</h2>
            </div>
            <div>
                <Booking />
            </div>
        </div>
    );
}

export { Reservation };