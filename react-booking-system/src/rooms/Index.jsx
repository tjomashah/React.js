import React from 'react';
import RoomSingle from './RoomSingle'
import RoomQueen from './RoomQueen'
import RoomDeluxe from './RoomDeluxe'
import RoomPresident from './RoomsPresident'
import FetchRequest from './FetchRequest'
// import ArrayRender from './ArrayRender'
// import RoomsFiltered from './RoomsFiltered';


function Rooms() {
    return (
        <div className="wrapper_rooms">
            <div style={{marginTop: 20}}>
                <h2 style={{textTransform: 'uppercase', letterSpacing: '5px', marginBottom: '20px'}}>Choose room</h2>
            </div>
            {/* <FetchRequest /> */}
            {/* <ArrayRender /> */}
            {/* <div><RoomsFiltered /></div> */}
            <RoomSingle />
            <RoomQueen />
            <RoomDeluxe />
            <RoomPresident />
        </div>
    );
}

export { Rooms };