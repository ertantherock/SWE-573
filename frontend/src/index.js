import ReactDOM from 'react-dom';
import App from './App';
import React, { Component }  from 'react';
import './index.css';
import LoginPage from './allPages/LoginPage';
import ContextAuth from './sharedAPI/ContextAuth';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import storeConfig from './FolderRedux/storeConfig';






const store =  storeConfig();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

