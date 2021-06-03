import React from 'react'

function TodosItem(props) {
    return (
        <div>
            <input 
            type="checkbox" 
            checked={props.item.completed} 
            onChange={() => props.handlChange(props.item.id)}/>
            <span>{props.item.task}</span>
        </div>
    )
}

export default TodosItem