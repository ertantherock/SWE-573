const defState = {

    userLoggedIn: false,
    username: undefined,
    mail: undefined,
    password: undefined,
    image: null,
    

};




const authRed = (state = {...defState}, action) => {
    if(action.type === 'logout-success') {
        return defState;
    }else if (action.type ==='login-success') {
        return {
            ...action.payload,
            userLoggedIn: true
        }
    }
    return state;
};

export default authRed;