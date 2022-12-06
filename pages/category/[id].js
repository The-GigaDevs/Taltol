import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryHeader from '../../components/CategoryHeader';
import MobileMenu from '../../components/MobileMenu';
import Navbar from '../../components/Navbar';
import ProFooter from '../../components/ProFooter';
import QuoteCards from '../../components/QuoteCards';
import TopicBrowse from '../../components/TopicBrowse';
import { fetchSingleCategory } from '../../slices/categories.slice';
import { fetchQuotesOfCategory } from '../../slices/quotes.slice';

const Category = ({ id }) => {

        const slug = useRouter().query.name?.toLocaleLowerCase();

    const dispatch = useDispatch()
    const [ page , setPage] = useState(1);
    const [ tags , setTags] = useState([]);
    const quotesRedux = useSelector(state => state.quotes?.quotes)
    const singleCategoryRedux = useSelector(state => state.categories.singleCategory)
    const tagsRedux = useSelector(state => state.categories.tags)


    const fetchNext = () => {
        setPage(page+1);
    }

    useEffect(()=> {
        if (quotesRedux?.results) {
            setTags(quotesRedux?.results[0]);
        }
    }, [quotesRedux?.results])
    useEffect(() => {
        if(!singleCategoryRedux || singleCategoryRedux?.id !== id) {
            dispatch(fetchSingleCategory(slug));
        }
        dispatch(fetchQuotesOfCategory({id, page}))

    }, [id, dispatch, page])

    return (
        <>
            <Head>
                <title>Taltol</title>
                <meta
                    name="description"
                    content="We love quotes and we want to provide the best user experience for quotes."
                />
                <meta name="keywords" content="quotes, planner, motivation" />
                <meta name="author" content="Abdul Hameid" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Navbar />
            <MobileMenu />
            <CategoryHeader category = {singleCategoryRedux} quotes={quotesRedux} tags={tags} />

            <main className="category-main">
                <div className="container">
                    <div className="category-main-content">
                        <section className="category-main-left-content">
                            <QuoteCards quotes={quotesRedux?.results} fetchNext={fetchNext} category={true} next={quotesRedux?.next} />
                        </section>
                        <section className="category-main-right-content">
                            <TopicBrowse user={true}/>
                        </section>
                    </div>
                </div>
            </main>
            <ProFooter />
        </>
    );
};


export default Category;


export async function getServerSideProps(ctx) {
    const { params } = ctx;
    if (params) {
        return {
            props: { id: params.id }
        };
    }
    return null;
}