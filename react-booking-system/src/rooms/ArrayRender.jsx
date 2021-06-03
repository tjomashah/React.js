import React from 'react'
import Data from './Data'
import Content from './Content'

class ArrayRender extends React.Component {
    constructor() {
        super()
    }
    render() {
        const rooms = Data.map(item => <Content key={item.id} item={item}/>)
        return (
            <div>
                {rooms}
            </div>
        )
    }
}

export default ArrayRender