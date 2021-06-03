import React from 'react';
import './Modal.css'

class Modal extends React.Component {
    constructor() {
        super()
        this.state = {
        isOpen: false 
        }
    }
    render() {
        return(
            <div>
                <button className="btn btn-info btn-sm" 
                onClick={() => this.setState({isOpen: true})}>More info
                </button>
                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                        <h5>Breakfast</h5>
                                <p className="text-muted"><i style={{marginRight: 10}} 
                                class="fas fa-check"></i>
                                Served at the property from 7:00 to 11:00</p>
                                <div>
                                    <span>Food</span>
                                    <div style={{display: 'flex'}}>
                                        <ul className="text-muted">  
                                            <li>Bread</li>
                                            <li>Cheese</li>
                                        </ul>
                                        <ul className="text-muted">  
                                            <li>Butter</li>
                                            <li>Yogurt</li>
                                        </ul>
                                        <ul className="text-muted">  
                                            <li>Friut</li>
                                            <li>Pasteries</li>
                                        </ul>
                                    </div>
                                    <span>Drinks</span>
                                    <ul className="text-muted">
                                        <li>Tea</li>
                                        <li>Fruit juice</li>
                                    </ul>
                                    <h5>In your private bathroom</h5>
                                    <ul className="text-muted">
                                        <li>Free toiletries</li>
                                        <li>Bath or shower</li>
                                        <li>Toilet paper</li>
                                    </ul>
                                </div>
                            <button className="btn btn-danger" onClick={() => 
                            this.setState({isOpen: false})}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Modal