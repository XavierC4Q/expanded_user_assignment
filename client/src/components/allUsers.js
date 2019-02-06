import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllUsers extends React.Component {
    state = {
        users: []
    }

    getAllUsers = () => {
        axios.get('/users')
        .then(data => {
            this.setState({ users: data.data })
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
        this.getAllUsers()
    }

    render(){
        return(
            <div>
                <h1>All Users</h1>
                {this.state.users[0] && this.state.users.map(u => {
                    let url = `/single/${u.id}`
                    return (
                        <div>
                            <div>
                                <Link to={url}><h3>{u.username}</h3></Link>
                            </div>
                            <div>
                                <p>{u.phone_number}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}