import React from 'react'

class SetState extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handlclick = this.handlclick.bind(this)
    }

    handlclick() {
        this.setState(prevState => {
            return {
                count: prevState.count +1
            }
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handlclick}>Click</button>
                {/* <ChildCOmponent count={this.state.count}/> */}
            </div>
        )
    }
}

export default SetState