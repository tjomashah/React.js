import React from 'react'
import './message.css'

function MessageTemplate() {
  return (
    <>
      <div className="message-template">
        <div>
          <label htmlFor="message">Content</label>
        </div>
        <textarea
          placeholder="Enter some info..."
          className="message-field-template"
          id="message"
        ></textarea>
      </div>
    </>
  )
}

export default MessageTemplate
