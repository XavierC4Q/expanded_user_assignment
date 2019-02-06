import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import EditUser from './edit'

export default class SingleUser extends React.Component {
    state = {
        user: null
    }

    getUser = () => {
        axios.get(`/users/user/${this.props.id}`)
        .then(({ data }) => {
            this.setState({ user: data })
        })
        .catch(err => {
            console.log(err)
        })
    }

    updateUserInfo = info => {
        this.setState({ user: info })
    }

    componentDidMount(){
        this.getUser()
    }

    render(){
        return(
            <div>
                {this.state.user && <h1>{this.state.user.username}</h1>}
                {this.state.user && <EditUser  
                    id={this.state.user.id} 
                    username={this.state.user.username} 
                    phone_number={this.state.user.phone_number}
                    updated={this.updateUserInfo}
                    />}
            </div>
        )
    }
}