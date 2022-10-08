import httpService from './http.sevice'

const saveInCollection = (params) => httpService.
    post(`quotes/save-in-collection/`, {...params})
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

const getCollections = () => httpService.
    get(`quotes/saved-collections/`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

const getSingleCollection = (id) => httpService.
    get(`quotes/?collections=${id}`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))

const createCollection = (name) => httpService.
    post(`quotes/saved-collections/`, {name})
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response))


    
 const collectionService = {
    saveInCollection,
    getCollections,
    getSingleCollection,
    createCollection
    
}

export default collectionService