import React from 'react';
import img6 from '../images/room-6.png'
import img7 from '../images/room-7.png'
import Modal from './Modal/Modal'
import { NavLink } from 'react-router-dom'
import './RoomsStyles.css'

class RoomDeluxe extends React.Component {
    constructor() {
        super()
        this.state = {
            roomsDescription: [
              {
                id: 3,
                type: "Deluxe",
                price: 200,
                description: "Good room, sea view"
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
                                    src={img6}
                                    alt={'Single'}
                                />
                                <img className="rooms_img_hover img-thumbnail"
                                    src={img7}
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

export default RoomDeluxe;