import React from 'react'
// import Condition from './Condition'

class Conditional extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            isLogged: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLogged: !prevState.isLogged
            }
        }
    )}

    render() {
        let buttonText = this.state.isLogged ? 'LOG OUT' : 'LOG IN'
        return (
            <div>
                {this.state.isLoading ? <h1>Loading...</h1> : <button onClick={this.handleClick}>{buttonText}</button>}
            </div>
        )
    }
} 

export default Conditional