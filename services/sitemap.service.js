import axios from "axios";

const http = axios.create({
  baseURL: process.env.apiURL,
  headers: {
    "Content-Type": "application/xml",
  },
});

const genericSiteMap = (path, p = null) =>
  http
    .get(path, { params: p })
    .then(({ data }) => Promise.resolve(data))
    .catch((response) => Promise.reject(response));

export const sitemaps = {
  sitemap: () => genericSiteMap("/sitemap.xml"),
  sitemapAuthors: (p = null) => genericSiteMap("/sitemap-authors.xml", p),
  sitemapQuotes: (p = null) => genericSiteMap("/sitemap-quotes.xml", p),
  sitemapTopics: (p = null) => genericSiteMap("/sitemap-topics.xml", p),
};
