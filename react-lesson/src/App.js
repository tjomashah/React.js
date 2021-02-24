import React, {useEffect} from 'react';
import ToDoList from './ToDO/ToDoList';
import Context from './context'
import AddTodo from './ToDO/AddTodo';
import Modal from './Modal/Modal';

function App() {
  // useState - hook for update state
  const [todos, setTodos] = React.useState([
    // after 'fetch' array may be empty

    // {id: 1, completed: false, title: 'Buy bread'},
    // {id: 2, completed: false, title: 'Buy milk'},
    // {id: 3, completed: false, title: 'Buy butter'}
  ])

  useEffect(() => {
    // '...?limit_5 - show no more than 5 lists'
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos)
      }) 
  }, [])

  // change false/true
  function toggleTodo(id) {
    // setTodos - change state 'Todolist'
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    // if 'id' itemlist true than this item will be deleted
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    // change state and new element 'concat'
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    // 'Provider' - delete did list, minimilize code
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React lesson</h1>
        <Modal />
        
        <AddTodo onCreate={addTodo}/>

        {/* change 'Todolist' when it clear */}
        {todos.length ?  <ToDoList todos={todos} onToggle={toggleTodo} /> : <p>No todos</p> }
       
      </div>
    </Context.Provider>
  )
}

export default App;
