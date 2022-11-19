import React from 'react';
import axios from 'axios';
import { signup, signUpAPI} from '../allAPI/apis'


class UserSignupPage extends React.Component{
state= {
    userName:null,
    displayName: null,
    password: null,
    rePassword: null,
    pendedApiCall: false
};

onChange= event => {
    const value = event.target.value;
    const field = event.target.name;

    this.setState({
        [field]: value
    })
}
onClickSignup = event => {
    event.preventDefault();

    const body = {
        userName :this.state.userName,
        displayName: this.state.displayName,
        password: this.state.password
    };
    this.setState({pendedApiCall: true})

   signUpAPI(body) // package.jsonda proxy configurating for spring localhost:8080
        .then((response) => {
            this.setState({pendedApiCall: false})

        }).catch(error => {
            this.setState({pendedApiCall: false}) //fail response alırsa çalışacak.
        });
}






    render(){
        return(
            <div className='container inline-flex p-2'>            
                <form>
                    <h1 className='text-center '> Sign Up</h1>
                    <div className='form-group'>
                        <label>User name</label>
                        <input placeholder="Enter User Name" className='form-control' name="userName" onChange={this.onChange} />
                    </div>
                    <div>
                        <label for="exampleFormControlInput1">Email Adress</label>
                        <input  type='email' placeholder="name@example.com" className='form-control' name="displayName" onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input placeholder="Enter Password" className='form-control' name='password' type="password" onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>Re-password</label>
                        <input placeholder="Enter re-password" className='form-control' name='rePassword' type="password" onChange={this.onChange}/>
                    </div>
                    <br></br>
                    <div className='text-center'>
                    <button className="btn btn-success btn-lg active" role="button" aria-pressed="true" onClick={this.onClickSignup}
                    disabled={this.state.pendedApiCall}>Sign Up
                    {this.state.pendedApiCall ? <span className="spinner-grow spinner-grow-sm" ></span> : "" }
                    </button>
                    </div>
                    
                </form>
              
            </div>

        );
    }
}

export default UserSignupPage;
