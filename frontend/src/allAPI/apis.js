import axios from "axios"

export const signUpAPI = (body) => {
    return axios.post('/api/1.0/users', body);
}

export const login = creds => {
    return axios.post('/api/1.0/auth', {}, { auth: creds });
};

export const sharePosts = (post,postLink,title,label) => {
    return axios.post('/api/1.0/posts', post, postLink,title,label)
};

export const getPosts = () => {
    return axios.get('/api/1.0/posts');
}

export const getUsers = () => {
    return axios.get("/api/1.0/users");
}

export const getUser = username => {
    return axios.get(`/api/1.0/users/${username}`)
}
