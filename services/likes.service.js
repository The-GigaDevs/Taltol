import httpService from "./http.sevice";

const getLikedQuotes = () =>
  httpService
    .get(`quotes/liked/`)
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response));

const likeQuote = (id) =>
  httpService
    .post(`quotes/like/`, {quote : id} )
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response));

const unlikeQuote = (id) =>
  httpService
    .post(`quotes/unlike-quote/`, { id })
    .then(({ data }) => data)
    .catch(({ error }) => Promise.reject(error.response));


const likesService = {
    getLikedQuotes,
    likeQuote,
    unlikeQuote
};

export default likesService;