import React from 'react'

class Fetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            // err: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/3')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    users: [json],
                })
            });
    }

    render() {

        let { isLoaded, users } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(
                <div>
                    <ul>
                        {users.map(item => (
                            <li key={item.id}>
                                {item.username}
                            </li>   
                        ))}
                    </ul>
                </div>
            )
        }  
    }
}

export default Fetch