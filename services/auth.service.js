import httpService from "./http.sevice";

const login = (email, password) => httpService
    .post('/users/login/', { email, password })
    .then(({data}) => data)
    .catch((response)=> Promise.reject(response))

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
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))

//write a put request to update the quote
const updateQuote = (id, data) => httpService
    .put(`/quotes/${id}`, data)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))

//write a get request to get authors
const getAuthors = (page, pageSize) => httpService
    .get(`/quotes/authors/?page=${page}&page_size=${pageSize}`)
    .then(({data}) => Promise.resolve(data))
    .catch(({error})=> Promise.reject(error))

//write a get request to get quotes in a catgory
const getQuotesByCategory = (category, page, pageSize) => httpService
    .get(`/quotes/categories/${category}/?page=${page}&page_size=${pageSize}`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))

//write a get reqeust to get categories
const getCategories = () => httpService
    .get(`/quotes/categories/`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))


const authService = {
    login,
    me,
    register,
    getQuotes,
    getQuote,
    updateQuote,
    getAuthors,
    getQuotesByCategory,
    getCategories
}
export default authService;
