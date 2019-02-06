import React from 'react';
import { Link } from 'react-router-dom'

const  NavBar = () => {
    return ( <div>
        <nav>
            <Link to='/'>All Users</Link>
            {" "}
            <Link to='/edit'>Edit Yourself</Link>
            {" "}
            <Link to='/add'>Add a Buddy</Link>
        </nav>
    </div> );
}
 
export default NavBar;