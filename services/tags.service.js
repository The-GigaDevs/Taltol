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

const TagService = {
    getTags,
    createTag
}

export default TagService;