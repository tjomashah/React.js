import React, { useState } from 'react'

function MainTodo() {
  const [text, setText] = useState('')
  const handleInput = (e) => {
    setText((e.target.name = e.target.value))
  }
  return (
    <>
      <div>
        <input onChange={handleInput} />
        <p>{text}</p>
      </div>
    </>
  )
}

export default MainTodo
