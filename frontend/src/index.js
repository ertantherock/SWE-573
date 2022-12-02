import ReactDOM from 'react-dom';
import App from './App';
import React, { Component }  from 'react';
import './index.css';
import LoginPage from './allPages/LoginPage';
import ContextAuth from './sharedAPI/ContextAuth';





ReactDOM.render(
    <ContextAuth>
        <App />
    </ContextAuth>
, document.getElementById('root'));

