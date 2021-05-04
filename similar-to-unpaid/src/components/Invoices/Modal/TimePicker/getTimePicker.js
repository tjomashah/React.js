import React from 'react'
import { TimePicker } from 'antd'
import format from 'moment'
import './TimePicker.css'

function GetTimePicker() {
  return (
    <div className="timepicker">
      <div className="timepicker-label">
        <label htmlFor="time">Message Hour</label>
      </div>
      <TimePicker
        id="time"
        className="timepicker-content"
        defaultValue={format('00:00:00', 'HH:mm:ss')}
        size="large"
      />
    </div>
  )
}

export default GetTimePicker
