import React from 'react';

import { signup, signUpAPI} from '../allAPI/apis'


class UserSignupPage extends React.Component{
state= {
    userName:null,
    mail: null,
    password: null,
    rePassword: null,
    pendedApiCall: false,
    errors: {}
};

onChange= event => {
    const {name, value} = event.target;
    
    const errors = {...this.state.errors}
    errors[name] = undefined
    this.setState({
        [name]: value,
        errors
    })
}
onClickSignup = async event => {
    event.preventDefault();

    const body = {
        userName :this.state.userName,
        mail: this.state.mail,
        password: this.state.password
    };
    this.setState({pendedApiCall: true});
    

    try {
        const response = await signUpAPI(body); // package.jsonda proxy configurating for spring localhost:8080
    } catch(error) {
        if( error.response.data.validationErrors)
         this.setState({errors: error.response.data.validationErrors})   
    }
    this.setState({pendedApiCall: false});
        
};






    render(){

        const { pendedApiCall, errors} = this.state;
        const {userName, mail, rePass ,password} = errors;

        return(
            <div className='container inline-flex p-2'>            
                <form>
                    <h1 className='text-center '> Sign Up</h1>
                    <div className='form-group'>
                        <label>User name</label>
                        <input placeholder="Enter User Name" className={userName ? 'form-control is-invalid' : "form-control"} name="userName" onChange={this.onChange} />
                        <div className="invalid-feedback">
                        {userName}
                        </div>
                    </div>
                    <div>
                        <label for="exampleFormControlInput1">Email Adress</label>
                        <input  type='email' placeholder="name@example.com" className={mail ? 'form-control is-invalid' : "form-control"} name="mail" onChange={this.onChange} />
                        <div className="invalid-feedback">
                        {mail}
                        </div>
                    </div>
                    <div>
                        <label>Password</label>
                        <input placeholder="Enter Password" className={password ? 'form-control is-invalid' : "form-control"} name='password' type="password" onChange={this.onChange}/>
                        <div className="invalid-feedback">
                        {password}
                        </div>
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
