import React, { Component } from 'react';

const Select = ({selectedValue, options, onDataChange}) => (
    <select style={{width: '300px', marginLeft: '30px'}} onChange={ ({target: {value}}) => onDataChange(value) }
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
    {name: 'Standard', value: 'Standard'},
    {name: 'Delux', value: 'Delux'}
]

 const RoomDetail = (props) => {
        const {
            roomType,
            occupants,
            onRoomTypeChange,
            onOccupantsChange
        } = props;
        return (
            <div>
                <h2 style={{marginLeft: '30px'}}>Room Details</h2>

                <label style={{display: 'block', marginLeft: '30px', fontWeight: 600}}>Room Type</label>
                <Select selectedValue={roomType}
                        options={roomTypeOptions} 
                        onDataChange={onRoomTypeChange}
                        />

                <label style={{display: 'block', margin: '20px 0 0 30px', fontWeight: 600}}>Customers</label>
                <Select selectedValue={occupants}
                        options={occupantOptions}
                        onDataChange={onOccupantsChange}
                        />
            </div>
        );
    }

export default RoomDetail;