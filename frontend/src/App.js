import React from 'react';
import UserSignupPage from './allPages/UserSignUpPage';
import LoginPage from './allPages/LoginPage';
import HomePage from './allPages/HomePage';
import TopBar from './Components/TopBar';
import UserPage from './allPages/UserPage';
import { connect, Connect } from 'react-redux';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import { Auth } from './sharedAPI/ContextAuth';


class App extends React.Component {
  // static contextType = Auth;


  render() {
    const userLoggedIn = false;
    const username = undefined;
    // const { userLoggedIn, username } = this.state;

    return (
      <div>
        <Router>
          <TopBar   />
          <Switch>
            <Route exact path="/" component={HomePage} />
            {!userLoggedIn && (
            <Route path="/login" component={reactRouterProps =>  {
              return <LoginPage {...reactRouterProps} logInSucces ={this.logInSucces}/>
            }} />)}
            <Route path="/signup" component={UserSignupPage} />
            <Route path="/user/:username" component={UserPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
    
      </div>
    );

  }
  

}
const mapStateToProps = store => {
  return {
      userLoggedIn: store.userLoggedIn,
      
  };
};
export default connect(mapStateToProps)(App);