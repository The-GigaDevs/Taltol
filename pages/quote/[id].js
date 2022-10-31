import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotesAgainstTag, fetchSingleQuote, toggleModal } from '../../slices/quotes.slice';
import Modal from 'react-modal';
import QuoteDP from '../../components/QuoteDP';
import { getAllQuotesOfAuthor } from '../../slices/authors.slice';
import Head from 'next/head';
Modal.setAppElement("#__next");

const ModalStyles = {
    content: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "0",
        border: "none",
        borderRadius: "7px",
        width: "100%",
        boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.25)",
        scroll: "auto"
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        zIndex: "3",
    },
};
const Quote = ({ id, url }) => {

    const dispatch = useDispatch()
    const isModal = useSelector(state => state.quotes.isModal)
    const singleQuote = useSelector(state => state.quotes.singleQuote)
    const authorQuotes = useSelector(state => state.authors.authorQuotes)
    const tagQuotes = useSelector(state => state.quotes.quotesAgainstTag)


    useEffect(() => {
        // if (!isModal) {
            dispatch(fetchSingleQuote(id));
        // }
    }, [id, isModal])                                                   

    useEffect(() => {
        //dispatch get all quotes of author
        if (singleQuote?.author) {
            dispatch(getAllQuotesOfAuthor(singleQuote.author.id))
        }
        //dispatch get all quotes of tag
        if (singleQuote?.tags) {
            dispatch(fetchQuotesAgainstTag(singleQuote.tags[0].tagId))
        }

    }, [singleQuote])

    return (
        <>
            <Head>
                <title>{singleQuote?.category?.link_slug + '-quotes' + '_' + singleQuote?.author.slug + '_' + singleQuote?.slug}</title>
                <meta name="description" content="We love quotes and we want to provide the best user experience for quotes."/>
                <meta name="keywords" content="quotes, planner, motivation" />
                <meta name="author" content="Abdul Hameid" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            {isModal ?
            <Modal
                isOpen={isModal}
                onRequestClose={() => dispatch(toggleModal(false))}
                style={ModalStyles}
            >
                <QuoteDP singleQuote={singleQuote} isModal={isModal} toggleModal={toggleModal} dispatch={dispatch} authorQuotes={authorQuotes} tagQuotes={tagQuotes} url={'/'} />

            </Modal>
            : <QuoteDP singleQuote={singleQuote} authorQuotes={authorQuotes} tagQuotes={tagQuotes} />}
        </>
    );
};

export default Quote;

export async function getServerSideProps(ctx) {
    const { params } = ctx;
    const { id } = params
    console.log((String(id).split('_'))[2], 'params');
    if (params) {
        return {
            props: { id: (String(id).split('_'))[2] }
        };
    }
    return null;
}