import React, { Component } from 'react';
import logo from '../logo/E.png'
import { Link } from 'react-router-dom';
import { Auth } from '../sharedAPI/ContextAuth';

class TopBar extends Component {
   
    render() {
        // const { userLoggedIn, username, logOutSucces } = this.props;
        return (
        <Auth.Consumer>
            {
                value=> {
                    const { state, logOutSucces} = value;
                    const { userLoggedIn, username} = state;

                    let logedInLinks = (
                        <ul class="navbar-nav ml-auto ">
                        <li > 
                            <Link class="nav-link" to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                    );
                    if(userLoggedIn == true) {
                        logedInLinks = (
                        <ul class="navbar-nav ml-auto ">
            
                            <li>
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li>
                                
                                <Link class="nav-link" to={"/user/"+username}>{username}</Link>
                            </li>
                            <li>
                                <Link class="nav-link" onClick={logOutSucces} to="/">Logout</Link>
                            </li>
                        </ul>
                        )
                    }
            
                    return (
                        <div className='navbar navbar-dark  bg-primary mb-2'>
                            <nav class="navbar navbar-light container navbar-expand ">
                          
                            
                            <Link class="navbar-brand align-self-start " to="/">
                            <img src={logo} width="45" alt='Epocket Logo' />
                                E Pocket
                            </Link>
            
                            { logedInLinks }
            
                                
                           
                         </nav>
                        </div>
                    );
                }}
        </Auth.Consumer>

        )
    }
}

export default TopBar;