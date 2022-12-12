import { legacy_createStore as createStore} from 'redux'
import authRed from './authRed';




const storeConfig = () => {
    const userAuth = localStorage.getItem('user-auth');
    
    let persistentState = {
        userLoggedIn: false,
        username: undefined,
        mail: undefined,
        password: undefined,
        image: undefined
    };


    if(userAuth) {
        try {
            persistentState= JSON.parse(userAuth)
        } catch (error) {
            
        }
       
    }

    const store=  createStore(authRed, persistentState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    store.subscribe(() => {
        localStorage.setItem('user-auth', JSON.stringify(store.getState()))
    })
    return store;
}

export default storeConfig;