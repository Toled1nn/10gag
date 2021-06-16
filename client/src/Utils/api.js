import axios from 'axios';

var api = axios.create({
    baseURL: 'http://localhost:3001/',
})

export const Login = (email,senha) => {
    return api.post('/login',{email,senha});
    
}

export const memes = () => {
    return api.get('/memes');

}

export const postagem = (title,desc,img) => {
    return api.post('/memes',{title,desc,img});

}