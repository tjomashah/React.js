import React from 'react'
import img1 from '../images/room-1.png'
import img2 from '../images/room-2.png'
import Modal from './Modal/Modal'
import { NavLink } from 'react-router-dom'
import './RoomsStyles.css'

class RoomSingle extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            roomsDescription: [
              {
                id: 1,
                type: "Single room",
                price: 100,
                description: "Standart room, courtyard view"
              },
            ]
          };
    }

    render() {
        return (
            <div className="single_room">
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
                                    src={img1}
                                    alt={'Single'}
                                />
                                <img className="rooms_img_hover img-thumbnail"
                                    src={img2}
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

export default RoomSingle;