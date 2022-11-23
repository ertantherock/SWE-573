import React, { Component } from 'react';

class LoginPage extends React.Component {
 state = {
    username: null,
    password: null
 }   

onChange = event => {
    const { name, value} = event.target;
    this.setState({
        [name]: value
    })
}
    
    
    
    
    render() {
        return (
            <div className='container'>
                    <h1 className='text-center'>Login</h1>
                    <form>
                    <div class="form-group">
                        <label >User Name</label>
                        <input name= 'username'  className="form-control" placeholder="Enter Username" onChange={this.onChange}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
                    <button type="submit" className="btn btn-primary ">Submit</button>
                    </div>
                    </form>
            </div>
        );
    }
}

export default LoginPage;