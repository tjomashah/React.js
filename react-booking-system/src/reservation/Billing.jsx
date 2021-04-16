import React, { Component } from 'react';
import './ReservationStyles.css'
import Count from './Count'

class Billing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCharge: 0,
            occupantCharges: 0,
            totalRoomCharges: 0,
            totalOccupantCharges: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        const {
            roomType,
            totalDays,
            occupants
        } = props;

        const roomCharge = roomType == 'Single' ? 100 : roomType == 'Queen size' ? 150 
        : roomType == 'Deluxe' ? 200 : 300;
        const occupantCharges = occupants == 1 ? roomCharge : (occupants) * roomCharge;
        const totalRoomCharges = totalDays * roomCharge;
        const totalOccupantCharges = totalDays * occupantCharges;
        
        return {
            roomCharge,
            occupantCharges,
            totalRoomCharges,
            totalOccupantCharges,
        }
    }

    render() {
        return (
            <div className="billing">
                <h4 className="billing_header">Summary</h4>
                <table className="billing_table">
                    <tbody>
                        <tr style={{backgroundColor: 'lightGrey'}}>
                            <td>Room Charges</td>
                            <td>{this.state.roomCharge} EUR</td>
                        </tr>
                        <tr>
                            <td>Nights</td>
                            <td>{this.props.totalDays} nights</td>
                        </tr>
                        <tr style={{backgroundColor: 'lightGrey'}}>
                            <td>Total Room Charges</td>
                            <td>{this.state.totalRoomCharges} EUR</td>
                        </tr>
                        <tr>
                            <td>Total Customers</td>
                            <td>{this.props.occupants}</td>
                        </tr>
                        <tr style={{backgroundColor: 'lightGrey'}}>
                            <td>Customer Charges</td>
                            <td>{this.state.occupantCharges} EUR</td>
                        </tr>
                        <tr>
                            <td>Total Customer Charges</td>
                            <td>{this.state.totalOccupantCharges} EUR</td>
                        </tr>     
                    </tbody>
                </table>
                <button className="btn btn-success" style={{width: 150}}>Submit</button>
                {/* <Count /> */}
            </div>
        );
    }
}

export default Billing;