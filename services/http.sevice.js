import axios from "axios";


const http = axios.create({
    baseURL: process.env.apiURL,
})

console.log( "the env file: ", process.env.apiURL );
export default http;