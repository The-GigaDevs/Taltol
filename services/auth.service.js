import httpService from "./http.sevice";
//import toast


const login = (email, password) => httpService
    .post('/users/login/', { email, password })
    .then(({ data }) => data)
    .catch((response) => Promise.reject(response))

const register = (data) => httpService
    .post('/users/', data)
    .then(({ data }) => Promise.resolve(data))
    .catch(({ error }) => Promise.reject(error))

const me = () => httpService
    .get('/users/me/')
    .then(({ data }) => data)
    .catch((response) => Promise.reject(response))

const socialLogin = (body) => httpService
    .post('/users/social-login/', { ...body })
    .then(({ data }) => data)
    .catch((response) => Promise.reject(response))

const allUsers = () => httpService
    .get('/users/')
    .then(({ data }) => data)
    .catch((response) => Promise.reject(response))

const addQuote =(body) => httpService
    .post(`/quotes/`, body)
    .then(({ data }) => Promise.resolve(data))
    .catch(({ error }) => Promise.reject(error))

const getQuotes = (page, pageSize) => httpService
    .get(`/quotes?page=${page}&page_size=${pageSize}`)
    .then(({ data }) => Promise.resolve(data))
    .catch(({ error }) => Promise.reject(error))

const getQuote = (slug) => httpService
    .get(`/quotes/${slug}/?show_tags=true`)
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


const updateAuthor = (id, data) => httpService
    .put(`/quotes/authors/${id}/`, data, {headers: {'Content-Type': 'multipart/form-data'}})
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error?.response))

//write a post request to add an author
const addAuthor = (data) => httpService
    .post('/quotes/authors/', data)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

const deleteQuote= (slug) => httpService
    .delete(`/quotes/${slug}/`)
    .then(({data}) => Promise.resolve(data))
    .catch(({error}) => Promise.reject(error))

//write a get request to get quotes in a catgory
const getQuotesByCategory = (category, page, pageSize) => httpService
    .get(`/quotes/categories/${category}/?page=${page || ''}&page_size=${pageSize || ''}`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

//write a get reqeust to get categories
const getCategories = (page, pageSize) => httpService
    .get(`/quotes/categories/?page=${page}&page_size=${pageSize}`)
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
    .get(`/quotes?tags=${id}&show_tags=true`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

const getTags = (page=1) => httpService
    .get(`/quotes/tags/?page=${page}`)
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

const updateCategory = (id, data) => httpService
    .put(`/quotes/categories/${id}/`, data)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error?.response))

const getCategory = (name) => httpService
    .get(`/quotes/categories/?name=${name}`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))

const addTopic = (data) => httpService
    .post('/quotes/categories/', data)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

const getSingleCategory = (id) => httpService
    .get(`quotes/categories/${id}`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))

const getSingleAuthor = (id) => httpService
    .get(`quotes/authors/${id}`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

const getQuotesOfSingleCategory = (id, page) => httpService
    .get(`quotes?categories=${id}&page=${page}&show_tags=true`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error.response))

const searchQuotesModal = (authors, tags, categories, search, month= false) => httpService
    .get(`/quotes/?authors=${authors}&tags=${tags}&categories=${categories}&search=${search}&month=${month}`)
    .then(({data}) => data)
    .catch(({error})=> Promise.reject(error?.response))

const getDropdownOptions = () => httpService
    .get('/quotes/dropdown/')
    .then(({data}) => data)
    .catch(({error}) => Promise.reject(error))

const saveDropdownOptions = (data) => httpService
    .post('/quotes/dropdown/', data)
    .then(({data}) => Promise.resolve(data))
    .catch((response) => Promise.reject(response))

const getDropdownQuotes = (topic, author, tag, page, pageSize) => httpService
    .get(`/quotes/?${topic ? `category_name=${topic}` : ''}?${author ? `author_name=${author}` : ''}?${tag ? `tag_name=${tag}` : ''}&page=${page}&page_size=${pageSize}`)
    .then(({data}) => Promise.resolve(data))
    .catch((response) => Promise.reject(response))


const authService = {
    login,
    me,
    register,
    getQuotes,
    getQuote,
    updateQuote,
    deleteQuote,
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
    getAuthorQuotesWithPage,
    addAuthor,
    addQuote,
    addTopic,
    socialLogin,
    allUsers,
    updateCategory,
    updateAuthor,
    getDropdownOptions,
    saveDropdownOptions,
    getDropdownQuotes
}
export default authService;
