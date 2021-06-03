import React from 'react'
import './message.css'

function MessageTemplate() {
  return (
    <>
      <div className="message">
        <div>
          <label htmlFor="message">Message Template</label>
        </div>
        <textarea
          placeholder="Enter a message..."
          className="message-field"
          id="message"
        ></textarea>
      </div>
    </>
  )
}

export default MessageTemplate
