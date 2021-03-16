import React from 'react'

function Joke(props) {
    return (
        <div>
            <h4 style={{display: props.question ? 'block' : 'none'}}>Question: {props.question}</h4>
            <h4 style={{color: !props.question && '#888888'}}>Answer: {props.answer}</h4>
            <hr/>
        </div>
    )
}

export default Joke