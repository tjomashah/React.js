import React, { Component } from 'react';

const Select = ({selectedValue, options, onDataChange}) => (
    <select className="form-control" style={{width: '250px', fontSize: 14, paddingRight: 10}} 
    onChange={ ({target: {value}}) => 
    onDataChange(value) }
            value={selectedValue}>
        {
            options.map(option => (
                <option value={option.value} 
                        key={option.name}>
                    {option.name}
                </option>
            ))
        }
    </select>
)

const occupantOptions = [
            {name: '1', value: 1},
            {name: '2', value: 2},
            {name: '3', value: 3},
            {name: '4', value: 4},
]

const roomTypeOptions = [
    {name: 'Single', value: 'Single'},
    {name: 'Queen size', value: 'Queen size'},
    {name: 'Deluxe', value: 'Deluxe'},
    {name: 'Presidential suite', value: 'Presidential suite'}
]

 const RoomDetail = (props) => {
        const {
            roomType,
            occupants,
            onRoomTypeChange,
            onOccupantsChange
        } = props;
        return (
            <div style={{width: 750, border: '1px solid black', marginLeft: 170, padding: '20px 30px'}}>
                <h4>Room Details</h4>

                <label style={{color: '#707070', display: 'block', margin: 0}}>Room Type</label>
                <Select selectedValue={roomType}
                        options={roomTypeOptions} 
                        onDataChange={onRoomTypeChange}
                        />

                <label style={{color: '#707070', display: 'block', margin: '10px 0 0'}}>Customers</label>
                <Select selectedValue={occupants}
                        options={occupantOptions}
                        onDataChange={onOccupantsChange}
                        />
            </div>
        );
    }

export default RoomDetail;