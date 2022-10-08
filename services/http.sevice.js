import axios from "axios";


const http = axios.create({
    baseURL: process.env.apiURL,
    headers: {
        'Content-type': 'application/json'
    }
})

http.interceptors.request.use(
    config => {
            config.headers['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwODM5NDUwLCJqdGkiOiI4OWM4YzRmMTBlODA0N2M2YTg1MDRiODVlNWZlYzc2MCIsInVzZXJfaWQiOiI3NWNhNzBmNS0wOTJiLTQzNjItOWQ5Ny1kN2Q1Y2M2YmQyYjEiLCJmaXJzdF9uYW1lIjoibXVoYW1tYWQiLCJsYXN0X25hbWUiOiJmYWlzYWwiLCJlbWFpbCI6bnVsbCwic291cmNlIjoiRW1haWwifQ.Jp-JqX1qL22GXhmF8HCEehbEMzI_MGDOSi47ajFJu50`;
        return config;
    },
    error => {
        Promise.reject(error)
    }
)

console.log( "the env file: ", process.env.apiURL );
export default http;