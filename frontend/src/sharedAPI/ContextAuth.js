import React, { Component } from 'react';

export const Auth = React.createContext();


class ContextAuth extends Component {
    state = {
        userLoggedIn: false,
        username: undefined,
        mail: undefined,
        image: undefined,
        password: undefined
    
     }
     
     logInSucces = authState=> {
        this.setState({
          username: authState.username,
          mail: authState.mail,
          password: authState.password,
          image: authState.image,
          userLoggedIn: true
        });
     };
    
     logOutSucces = () => {
        this.setState({
          userLoggedIn: false,
          username: undefined
        })
    
     }



    render() {
        return (
            <Auth.Provider value={{
                state: {... this.state},
                logInSucces: this.logInSucces,
                logOutSucces: this.logOutSucces
            }}>
                {this.props.children}
            </Auth.Provider>
        );
    }
}

export default ContextAuth;