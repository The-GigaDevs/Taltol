import http from "./http.sevice";


const getTags = () => {
    return http.get("/quotes/tags/")
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response));
    }

const createTag = (data) => {
    return http.post("/quotes/tags/", data)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response));
}

const searchTagsByName = (query) => http
    .get(`/quotes/tags/?text=${query}`)
    .then(({data})=> data)
    .catch(({error}) => Promise.reject(error))

const TagService = {
    getTags,
    createTag,
    searchTagsByName
}

export default TagService;