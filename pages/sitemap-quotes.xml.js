
import { sitemaps } from '../services/sitemap.service';
const { sitemapQuotes } = sitemaps;

const SitemapQuotes = () => {
    return (
        null
    )
}

export const getServerSideProps = async (ctx) => {
    console.log(ctx, 'ctx')
    const { res, query } = ctx
    const result = await sitemapQuotes();
    res.setHeader("Content-Type", "text/xml");
    res.write(result);
    res.end();
   
    return {
        props: {},
    };
}
export default SitemapQuotes;