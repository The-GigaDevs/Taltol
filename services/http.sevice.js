import axios from "axios";

const http = axios.create({
    baseURL: process.env.baseURL,
})

export default http;