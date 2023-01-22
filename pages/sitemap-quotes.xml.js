import { sitemaps } from "../services/sitemap.service";
const { sitemapQuotes } = sitemaps;

const SitemapQuotes = () => {
  return null;
};

export const getServerSideProps = async (ctx) => {
  const { res, query } = ctx;
  const result = await sitemapQuotes(query);
  res.setHeader("Content-Type", "text/xml");
  res.write(result);
  res.end();

  return {
    props: {},
  };
};
export default SitemapQuotes;
