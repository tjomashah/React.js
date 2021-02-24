import React from 'react'
import '../Modal/Modal.css'

export default class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})}>Open modal</button>

                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h1>Modal title</h1>
                            <p>Modal window is opening</p>
                            <button onClick={() => this.setState({isOpen: false})}>Close modal</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}