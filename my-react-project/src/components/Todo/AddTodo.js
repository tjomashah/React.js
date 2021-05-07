import React, { useState } from 'react'

function AddTodo() {
  const [addTodo, setAddTodo] = useState([])
  const enterNewTodo = (e) => {
    setAddTodo((e.target.name = e.target.value))
  }

  function addNewTodo() {
    console.log(addTodo)
  }

  return (
    <>
      <div>
        <input onChange={enterNewTodo} />
        <button onClick={addNewTodo}>Add Todo</button>
        <div>{addTodo}</div>
      </div>
    </>
  )
}

export default AddTodo
