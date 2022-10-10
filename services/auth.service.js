import httpService from "./http.sevice";

const login = (email, password) => httpService
    .post('/users/login/', { email, password })
    .then(({ data }) => data)
    .catch((response) => Promise.reject(response))

const register = (data) => httpService
    .post('/register', data)
    .then(({ data }) => Promise.resolve(data))
    .catch(({ error }) => Promise.reject(error))

const me = () => httpService
    .get('/users/me')
    .then(({ data }) => Promise.resolve(data))
    .catch(({ error }) => Promise.reject(error))

const getQuotes = (page, pageSize) => httpService
    .get(`/quotes?page=${page}&page_size=${pageSize}`)
    .then(({ data }) => Promise.resolve(data))
    .catch(({ error }) => Promise.reject(error))

const getQuote = (id) => httpService
    .get(`/quotes/${id}`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

//write a put request to update the quote
const updateQuote = (id, data) => httpService
    .put(`/quotes/${id}`, data)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

//write a get request to get authors
const getAuthors = (page, pageSize) => httpService
    .get(`/quotes/authors/?page=${page}&page_size=${pageSize}`)
    .then(({ data }) => Promise.resolve(data))
    .catch(({ error }) => Promise.reject(error))

//write a get request to get quotes in a catgory
const getQuotesByCategory = (category, page, pageSize) => httpService
    .get(`/quotes/categories/${category}/?page=${page || ''}&page_size=${pageSize || ''}`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

//write a get reqeust to get categories
const getCategories = (page, pageSize) => httpService
    .get(`/quotes/categories/?page=${page}&pageSize=${pageSize}`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

const getAuthorQuotes = (id) => httpService
    .get(`/quotes?authors=${id}`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

const getAuthorQuotesWithPage = (id, page) => httpService
    .get(`/quotes?authors=${id}&page=${page}`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

const getQuotesAgainstTag = (id) => httpService
    .get(`/quotes?tags=${id}`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

const getTags = () => httpService
    .get(`/quotes/tags/`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))

const getTag = (text) => httpService
    .get(`/quotes/tags/?text=${text}`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))

const getAuthor = (name) => httpService
    .get(`/quotes/authors/?name=${name}`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))

const getCategory = (name) => httpService
    .get(`/quotes/categories/?name=${name}`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))

const getSingleCategory = (id) => httpService
    .get(`quotes/categories/${id}`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))

const getSingleAuthor = (id) => httpService
    .get(`quotes/authors/${id}`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

const getQuotesOfSingleCategory = (id, page) => httpService
    .get(`quotes?categories=${id}&page=${page}`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))

const searchQuotesModal = (authors, tags, categories, search) => httpService
    .get(`/quotes/?authors=${authors}&tags=${tags}&categories=${categories}&search=${search}`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error?.response))

const authService = {
    login,
    me,
    register,
    getQuotes,
    getQuote,
    updateQuote,
    getAuthors,
    getQuotesByCategory,
    getCategories,
    getAuthorQuotes,
    getTags,
    getTag,
    getAuthor,
    getCategory,
    getQuotesAgainstTag,
    getSingleCategory,
    getQuotesOfSingleCategory,
    searchQuotesModal,
    getSingleAuthor,
    getAuthorQuotesWithPage
}
export default authService;
