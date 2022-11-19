import axios from "axios"

export const signUpAPI = (body) => {
    return axios.post('/api/1.0/users', body);
}