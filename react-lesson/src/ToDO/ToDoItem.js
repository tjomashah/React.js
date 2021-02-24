import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddind: '.5rem 1rem',
        border: '1px solid grey',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function ToDoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    // add line-through
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }


    return (
        <li style={styles.li}>
        <span className={classes.join(' ')}>
                <input type="checkbox" 
                checked={todo.completed}
                style={styles.input} 
                // if TOdo did text-through 
                onChange={() => onChange(todo.id)} />
                <strong>{index + 1}</strong>
                {/* symbol-space between index and title */}
                &nbsp;
                {todo.title}
                
            </span>
            {/* symbol 'x', 'bind' - all items doesn't remove */}
            <button onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

// Protypes - validation for data types
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ToDoItem