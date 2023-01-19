import axios from "axios";

const http = axios.create({
    baseURL: process.env.apiURL,
    headers: {
        'Content-Type': 'application/xml'
    }
})
const sitemap = () => http
    .get('/sitemap.xml')
    .then(({data}) => Promise.resolve(data))
    .catch((response) => Promise.reject(response))

const sitemapAuthors = (p) => http
    .get(`/sitemap-authors.xml`)
    .then(({data}) => Promise.resolve(data))
    .catch((response) => Promise.reject(response))

const sitemapTopics = (p) => http
    .get(`/sitemap-topics.xml`)
    .then(({data}) => Promise.resolve(data))
    .catch((response) => Promise.reject(response))

const sitemapQuotes = (p) => http
    .get(`/sitemap-quotes.xml`)
    .then(({data}) => Promise.resolve(data))
    .catch((response) => Promise.reject(response))

export const sitemaps = {
    sitemap,
    sitemapAuthors,
    sitemapQuotes,
    sitemapTopics
} 