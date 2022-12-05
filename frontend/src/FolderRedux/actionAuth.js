export const logOutSuccess = () => {

    return {
            type: 'logout-success'
        };
    }

export const logInSucces = (authState) => {
    

    return {
        type: 'login-success',
        payload: authState
    }
    
}