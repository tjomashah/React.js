import React from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from '../redux/actions'
import { Alert } from './Alert'

class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state
        
        if (!title.trim()) {
            return this.props.showAlert(`This field cannot be empty`)
        }

        const newPost = {
            title, id: Date.now().toString()
        }
        console.log(newPost)
        this.props.createPost(newPost)
        this.setState({ title: '' })

    }

    changeInputHandler = event => {
        // event.persist()
        this.setState( prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }})) 
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert} />}
                <div className="form-group">
                    <label for="title">Post header</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
            </form>
        )
    }

}

const mapDispatchToProps = {
    createPost: createPost,
    showAlert: showAlert
}

const mapStateTpProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateTpProps, mapDispatchToProps)(PostForm)