import React from 'react';
import UserSignupPage from './allPages/UserSignUpPage';
import LoginPage from './allPages/LoginPage';
import HomePage from './allPages/HomePage';
import TopBar from './Components/TopBar';
import UserPage from './allPages/UserPage';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={UserSignupPage} />
          <Route path="/user/:username" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
  
    </div>
  );
}
export default App;