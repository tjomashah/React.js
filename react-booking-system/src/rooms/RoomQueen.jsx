import React from 'react';
import img3 from '../images/room-3.png'
import img4 from '../images/room-4.png'
import Modal from './Modal/Modal'
import { NavLink } from 'react-router-dom'
import './RoomsStyles.css'

class RoomQueen extends React.Component {
    constructor() {
        super()
        this.state = {
            roomsDescription: [
              {
                id: 2,
                type: "Queen size",
                price: 150,
                description: "Nice room, courtyard view"
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
                                    src={img3}
                                    alt={'Single'}
                                />
                                <img className="rooms_img_hover img-thumbnail"
                                    src={img4}
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

export default RoomQueen;