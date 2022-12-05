import {createStore} from 'redux';
import authRed from './authRed';

const loggedInState = {

    userLoggedIn: true,
    username: 'ertankaya3',
    mail: 'ertancank@gmail.com',
    password: 'ertanertan',
    image: null,
    

};


const storeConfig = () => {
    return createStore(authRed, loggedInState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default storeConfig;