import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
const  DateSelector = (props) => {
        let {
            checkinDate,
            checkoutDate,
            totalDays,
            onCheckinChange,
            onCheckoutChange,
            invalidRange
        } = props;
        return (
            <div style={{float: 'right', padding: '48px 185px 0 0'}}>
                <h4>Date Range</h4>

                <DatePicker 
                    selected={checkinDate}
                    onChange={onCheckinChange}
                />

                <DatePicker
                    selected={checkoutDate}
                    onChange={onCheckoutChange}
                />

                <p style={{marginTop: 10}}>Total: <span>{totalDays}</span> nights </p>

                { invalidRange && <p>Invalid Date Range</p> }
            </div>
        );
    }

DateSelector.propTypes = {
    checkinDate: PropTypes.instanceOf(Date).isRequired,
    checkoutDate: PropTypes.instanceOf(Date).isRequired,
    onCheckinChange: PropTypes.func.isRequired,
    onCheckoutChange:PropTypes.func.isRequired,
    totalDays: PropTypes.number.isRequired
}

export default DateSelector;