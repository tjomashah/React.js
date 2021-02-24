import React, { Component } from 'react';

class Billing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCharge: 0,
            occupantCharges: 0,
            totalRoomCharges: 0,
            totalOccupantCharges: 0,
            discount: 0,
            grandTotal: 0,
            afterTax: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        const {
            roomType,
            totalDays,
            occupants
        } = props;

        const roomCharge = roomType == 'Standard' ? 200 : 400 ;
        const occupantCharges = occupants == 1 ? 0 : (occupants) * 200;
        const totalRoomCharges = totalDays * roomCharge;
        const totalOccupantCharges = totalDays * occupantCharges;

        const discount = totalDays >= 5 ? 15: 0;

        return {
            roomCharge,
            occupantCharges,
            totalRoomCharges,
            totalOccupantCharges,
            discount
        }
    }

    render() {
        return (
            <div>
                <h2 style={{marginLeft: '30px'}}>Summary</h2>

                <table style={{marginLeft: '30px'}}>
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
                            <td>Total Occupants</td>
                            <td>{this.props.occupants}</td>
                        </tr>

                        <tr style={{backgroundColor: 'lightGrey'}}>
                            <td>Customer Charges</td>
                            <td>{this.state.occupantCharges} EUR per day</td>
                        </tr>


                        <tr>
                            <td>Total Occupant Charges</td>
                            <td>{this.state.totalOccupantCharges} EUR</td>
                        </tr>     
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Billing;