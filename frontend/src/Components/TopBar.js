import React, { Component } from 'react';
import logo from '../logo/E.png'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStore } from "redux";
import {logOutSuccess} from '../FolderRedux/actionAuth'

// import { Auth } from '../sharedAPI/ContextAuth';

class TopBar extends Component {
   

    render() {

   
        // const { userLoggedIn, username, logOutSucces } = this.props;
 
                

                    const {userLoggedIn, username , onLogOutSucces}  = this.props;
                   

                    let logedInLinks = (
                        <ul className="navbar-nav ml-auto ">
                        <li > 
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                    );
                    if(userLoggedIn === true) {
                        logedInLinks = (
                        <ul className="navbar-nav ml-auto ">
            

                            <li>
                                
                                <Link className="nav-link" to={"/user/"+username}>{username}</Link>
                            </li>
                            <li>
                                <Link className="nav-link" onClick={onLogOutSucces} to="/">Logout</Link>
                            </li>
                        </ul>
                        )
                    }
            
                    return (
                        <div className='navbar navbar-dark  bg-primary mb-2'>
                            <nav className="navbar navbar-light container navbar-expand ">
                          
                            
                            <Link className="navbar-brand align-self-start " to="/">
                            <img src={logo} width="45" alt='Epocket Logo' />
                                E Pocket
                            </Link>
            
                            { logedInLinks }
            
                                
                           
                         </nav>
                        </div>
                    );
                }
            }

  

  const mapStateToProps = store => {
    return {
        userLoggedIn: store.userLoggedIn,
        username: store.username
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
        onLogOutSucces: () => {
            dispatch(logOutSuccess());
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);