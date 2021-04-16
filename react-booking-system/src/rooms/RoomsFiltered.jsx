import React from 'react'
import RoomSingle from './RoomSingle'
import RoomQueen from './RoomQueen'
import RoomDelux from './RoomDeluxe'
import RoomsPresident from './RoomsPresident'

function RoomsFiltered() {
    const filter = [
        {
            id: 1,
            type: "Single"
        },
        {
            id: 2,
            type: "Queen size"

        },
        {
            id: 3,
            type: "Deluxe"
        },
        {
            id: 4,
            type: "Presidential suite"

        }
    ]
    return(
        <div>
            <ul> Single
                    {
                        filter
                        .filter(item => item.type === 'Single')
                        .map(item => <li key={item.id}>{item.type}</li>) 
                    }

                {/* <li>Queen size</li>
                <li>Deluxe</li>
                <li>President</li> */}
            </ul>
        </div>
    )
}

export default RoomsFiltered