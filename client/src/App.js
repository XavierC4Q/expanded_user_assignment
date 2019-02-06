import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/navBar'
import AllUsers from './components/allUsers'
import SingleUser from './components/singleUser'
import EditUser from './components/edit'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={AllUsers} />
        <Route exact path='/single/:id' render={props => <SingleUser id={props.match.params.id} />} />
        <Route path='/edit' component={EditUser} />
      </div>
    );
  }
}

export default App;
