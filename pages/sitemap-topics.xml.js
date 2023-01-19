
import { sitemaps } from '../services/sitemap.service';
const { sitemapTopics } = sitemaps;

const SitemapTopics = () => {
    return (
        null
    )
}

export const getServerSideProps = async (ctx) => {
    console.log(ctx, 'ctx')
    const { res, query } = ctx
    const result = await sitemapTopics();
    res.setHeader("Content-Type", "text/xml");
    res.write(result);
    res.end();
   
    return {
        props: {},
    };
}
export default SitemapTopics;