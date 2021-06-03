import React from 'react'
import TodosItem from './TodosItem'
import TodoList from './TodoList'

class Todos extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: TodoList
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return updatedTodos
        })
    }
    
    render() {
        const todos = this.state.todos.map(item => <TodosItem key={item.id} item={item} 
        handleChange={this.handleChange}/>)

        return (
            <div>
                {todos}
                
            </div>
        )
    }
}

export default Todos