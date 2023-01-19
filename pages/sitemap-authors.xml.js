
import { sitemaps } from '../services/sitemap.service';
const { sitemapAuthors } = sitemaps;

const SitemapAuthors = () => {
    return (
        null
    )
}

export const getServerSideProps = async (ctx) => {
    console.log(ctx, 'ctx')
    const { res, query } = ctx
    const result = await sitemapAuthors();
    res.setHeader("Content-Type", "text/xml");
    res.write(result);
    res.end();
   
    return {
        props: {},
    };
}
export default SitemapAuthors;