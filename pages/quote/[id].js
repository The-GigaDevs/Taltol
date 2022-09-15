import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleQuote, toggleModal } from '../../slices/quotes.slice';
import Modal from 'react-modal';
import QuoteDP from '../../components/QuoteDP';
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
const Quote = ({ id }) => {
    const dispatch = useDispatch()
    const isModal = useSelector(state => state.quotes.isModal)
    const singleQuote = useSelector(state => state.quotes.singleQuote)
    
    useEffect(() => {
        if (!isModal) {
            dispatch(fetchSingleQuote(id));
        }
    }, [dispatch, id, isModal])

    return (
        isModal ?
            <Modal
                isOpen={isModal}
                onRequestClose={() => dispatch(toggleModal(false))}
                style={ModalStyles}
            >
                <QuoteDP singleQuote={singleQuote} isModal={isModal} toggleModal={toggleModal} dispatch={dispatch} />
            </Modal>
            : <QuoteDP singleQuote={singleQuote} />
    );
};

export default Quote;

export async function getServerSideProps(ctx) {
    const { params } = ctx;
    if (params) {
        return {
            props: { id: params.id }
        };
    }
    return null;
}