import { sitemaps } from "../services/sitemap.service";

const { sitemap } = sitemaps;
const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const result = await sitemap();
  res.setHeader("Content-Type", "text/xml");
  res.write(result);
  res.end();

  return {
    props: {},
  };
};
export default Sitemap;
