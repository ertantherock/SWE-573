import React, { Component } from 'react';
import logo from '../logo/E.png'
import { Link } from 'react-router-dom';

class TopBar extends Component {
    render() {
        return (
            <div className='navbar navbar-dark  bg-primary mb-2'>
                <nav class="navbar navbar-light container navbar-expand ">
              
                
                <Link class="navbar-brand align-self-start " to="/">
                <img src={logo} width="45" alt='Epocket Logo' />
                    E Pocket
                </Link>

          
                    <ul class="navbar-nav ml-auto ">
                        <li>
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li >
                            <Link class="nav-link" to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                    
               
             </nav>
            </div>
        );
    }
}

export default TopBar;