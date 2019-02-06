import React from 'react'
import axios from 'axios'

export default class EditUser extends React.Component {
    state = {
        usernameInput: '',
        phoneNumberInput: '',
        message: ''
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { usernameInput, phoneNumberInput } = this.state

        axios.patch('/users/edit', {
            id: this.props.id,
            username: usernameInput ? usernameInput : this.props.username,
            phone_number: phoneNumberInput ? phoneNumberInput : this.props.phone_number
        })
        .then(data => {
            
            this.props.updated(data.data)

            this.setState({
                usernameInput: '',
                phoneNumberInput: '',
                message: 'Successfully updated'
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type='text' name='usernameInput' onInput={this.handleInput} placeholder='Enter new username' value={this.state.usernameInput} />
                <input type='text' name='phoneNumberInput' onInput={this.handleInput} placeholder='Enter new phone number' value={this.state.phoneNumberInput} />
                <button type='submit'>Submit</button>
                </form>
                {this.state.message}
            </div>
        )
    }
}