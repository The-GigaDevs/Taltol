import axios from "axios";


const http = axios.create({
    baseURL: process.env.apiURL,
    headers: {
        'Content-type': 'application/json'
    }
})

http.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('token');
        if(accessToken) {
            config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            return config
        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
)

console.log( "the env file: ", process.env.apiURL );
export default http;