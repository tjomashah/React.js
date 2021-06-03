import React from 'react'

class State extends React.Component {
    constructor() {
        super()
        this.state = {
            // name: 'Jojn',
            // age: 27
            isLoggedIn: false 
        }
    }
    render() {
        // const user = this.state.name + ' ' + 'is' + ' ' + this.state.age + ' ' + 'years old'4
        const logged = this.state.isLoggedIn ? 'in' : 'out'
        return (
            <div>
                {/* <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>  
                {user}       */}
                <h1>You are currently logged {logged}</h1>
            </div>
        )
    }
    
}

export default State