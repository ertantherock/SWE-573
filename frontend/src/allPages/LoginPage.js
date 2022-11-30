import React, { Component } from 'react';
import {login} from '../allAPI/apis'
import App from '../App';

class LoginPage extends React.Component {
 state = {
    username: null,
    password: null
 };  

    onChange = event => {
        const { name, value} = event.target;
        this.setState({
            [name]: value
        });
    };
        
    onClickLogin = async event => {
        event.preventDefault();
        const { username, password } = this.state;
        const creds = {
            username,
            password
        };
        try {
            await login(creds);
            this.props.history.push('/')
        } catch (apiError) {
            this.setState({
                error: apiError.response.data.message
            });
        }
    };
   
    
    
    render() {
        return (
            <div className='container'>
                    <h1 className='text-center'>Login</h1>
                    <form>
                    <div class="form-group">
                        <label >User Name</label>
                        <input name= 'username'  className="form-control" placeholder="Enter username" onChange={this.onChange}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your personal information with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.onChange}/>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div className='text-center'>
                    <button type="submit" className="btn btn-primary " onClick={this.onClickLogin}>Login</button>
                    </div>
                    </form>
            </div>
        );
    }
}

export default LoginPage;