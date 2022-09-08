import httpService from "./http.sevice";

const login = (email, password) => httpService
    .post('/users/login/', { email, password })
    .then(({data}) => Promise.resolve(data))
    .catch(({error})=> Promise.reject(error))

const register = (data) => httpService
    .post('/register' ,data)
    .then(({data}) => Promise.resolve(data))
    .catch(({error})=> Promise.reject(error))

const me = () => httpService
    .get('/users/me')
    .then(({data}) => Promise.resolve(data))
    .catch(({error})=> Promise.reject(error))

const getQuotes = (page, pageSize) => httpService
    .get(`/quotes?page=${page}&page_size=${pageSize}`)
    .then(({data}) => Promise.resolve(data))
    .catch(({error})=> Promise.reject(error))

const getQuote = (id) => httpService

    .get(`/quotes/${id}`)
    .then(({data}) => Promise.resolve(data))
    .catch(({error})=> Promise.reject(error))
        

const authService = {
    login,
    register,
    getQuotes
}
export default authService;
