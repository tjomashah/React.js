import React from 'react'

function Content(props) {
    return (
        <div>
            <div>
                <h3>{props.contact.name}</h3>
                <p>{props.contact.text}</p>
                <a src={props.contact.email}>email</a>
            </div>

        </div>
    )
}

export default Content