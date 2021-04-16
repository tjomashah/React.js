import React from 'react';
import img11 from '../images/room-11.png'
import img12 from '../images/room-12.png'
import Modal from './Modal/Modal'
import { NavLink } from 'react-router-dom'
import './RoomsStyles.css'

class RoomPresident extends React.Component {
    constructor() {
        super()
        this.state = {
            roomsDescription: [
              {
                id: 4,
                type: "Presidential suite",
                price: 300,
                description: "Very nice room, sea view, first coast line"
              },
            ]
        };
    }

    render() {
        return (
            <div>
                {this.state.roomsDescription &&
                this.state.roomsDescription
                .map((item) => {
                    return (
                        <div className="room data-body">
                            <div style={{paddingLeft: 20}}>
                                <div>Type : <span>{item.type}</span></div>
                                <div>Price : <span>${item.price}</span></div>
                                <div>Description : <span>{item.description}</span></div>
                                <Modal />
                            </div>
                            <div className="room_img">
                                <img className="rooms_img img-thumbnail" 
                                    src={img11}
                                    alt={'Single'}
                                />
                                <img className="rooms_img_hover img-thumbnail"
                                    src={img12}
                                    alt={'Single'}
                                />
                            </div>
                            <NavLink to="/reservation"><button className="btn btn-success active"
                            style={{marginLeft: 20}}>Reserve</button></NavLink>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default RoomPresident;