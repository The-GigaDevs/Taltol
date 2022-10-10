import axios from "axios";


const http = axios.create({
    baseURL: process.env.apiURL,
    headers: {
        'Content-type': 'application/json'
    }
})

http.interceptors.request.use(
    config => {
            config.headers['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMjczMDE3LCJqdGkiOiI1M2I0MGNmNGNhMzM0OGU5YWE2NWU4ZWEzNDJmYjcwMyIsInVzZXJfaWQiOiI3NWNhNzBmNS0wOTJiLTQzNjItOWQ5Ny1kN2Q1Y2M2YmQyYjEiLCJmaXJzdF9uYW1lIjoibXVoYW1tYWQiLCJsYXN0X25hbWUiOiJmYWlzYWwiLCJlbWFpbCI6bnVsbCwic291cmNlIjoiRW1haWwifQ.qJbXD5mZsULZeA4xUkNL40pjjaJGKIzWi9Yy0QGdRUw`;
        return config;
    },
    error => {
        Promise.reject(error)
    }
)

console.log( "the env file: ", process.env.apiURL );
export default http;