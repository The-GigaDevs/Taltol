import http from "./http.sevice";

const getCustomePage = (id) => {
    return http.get(`/custom-page/${id}`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response));
    }

const createCustomPage = (data) => {
    return http.post("/quotes/custom-pages/", data)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response));
}

const customPageService = {
    getCustomePage,
    createCustomPage
}

export default customPageService;