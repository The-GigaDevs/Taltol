import axios from "axios";


const http = axios.create({
    baseURL: process.env.apiURL,
    headers: {
        'Content-type': 'application/json'
    }
})

http.interceptors.request.use(
    config => {
            config.headers['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMjM4ODEyLCJqdGkiOiJmY2UyMGU4NmI4MWI0N2U4OThiYWJiZTNhZDJkODdjNiIsInVzZXJfaWQiOiI5Zjk1MmQ5NC0wOTkyLTQ5MTctOGJlNy04ZjUwNmY3YTMzMDYiLCJmaXJzdF9uYW1lIjoiQXRhYmljIiwibGFzdF9uYW1lIjoiVW1lciIsImVtYWlsIjpudWxsLCJzb3VyY2UiOiJFbWFpbCJ9.E75dR10hWOxjpDCf6zxhuK74GPTC96z5CLni0c1Ezlw`;
        return config;
    },
    error => {
        Promise.reject(error)
    }
)

console.log( "the env file: ", process.env.apiURL );
export default http;