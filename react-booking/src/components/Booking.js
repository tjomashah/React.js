import React, { Component } from 'react';

import RoomDetail from '../components/RoomDetails';
import DateSelector from '../components/DateSelector';
import Billing from '../components/Billing';

const msecondsPerDay = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
  const utcDay1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcDay2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utcDay2 - utcDay1) / msecondsPerDay);
}
 
class Booking extends Component {
    constructor(props) {
        super(props);

        const today =  new Date();
        const checkout = new Date();
        checkout.setDate(today.getDate() + 1);

        this.state = {
            checkinDate: today,
            checkoutDate: checkout,
            occupants: 1,
            roomType: 'Standard'
        }
    }

    static getDerivedStateFromProps(props, state) {
        const totalDays = dateDiffInDays(state.checkinDate, state.checkoutDate);
        const invalidRange =  (totalDays <= 0 || totalDays >= 22)
        
        return {
            totalDays,
            invalidRange
        }
    }

    onCheckinChange = (checkinDate) => {
        this.setState({
            checkinDate
        })
    }

    onCheckoutChange = (checkoutDate) => {
        this.setState({
            checkoutDate
        })
    }

    onOccupantsChange = (occupants) => {
        this.setState({
            occupants
        })
    }
     

    onRoomTypeChange = (roomType) => {
        this.setState({
            roomType
        })
    }
     
    render() {
        return (
            <div>

                <DateSelector checkinDate = {this.state.checkinDate} 
                              checkoutDate = {this.state.checkoutDate}
                              totalDays = {this.state.totalDays}
                              invalidRange = {this.state.invalidRange}
                              onCheckinChange = {this.onCheckinChange}
                              onCheckoutChange = {this.onCheckoutChange}
                />
                <RoomDetail occupants={this.state.occupants}
                            roomType={this.state.roomType}
                            onRoomTypeChange = {this.onRoomTypeChange}
                            onOccupantsChange = {this.onOccupantsChange}
                
                />

                { !this.state.invalidRange 
                    && 
                    <Billing roomType={this.state.roomType}
                              totalDays = {this.state.totalDays} 
                              occupants = {this.state.occupants}
                              /> }
            </div>
        );
    }
}

export default Booking;