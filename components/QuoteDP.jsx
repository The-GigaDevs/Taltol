import QuoteCard from "./QuoteCard"
import randomAuthor from '../public/static/quote-card-author.jpg'
import { useRouter } from "next/router"

export default function QuoteDP({ singleQuote, isModal, dispatch, toggleModal, authorQuotes, tagQuotes }) {
    const router = useRouter();
    return (
        <div className="quote">
            <header className="quote-header">
                {isModal &&
                <>
                    <span className="quote-header-close" onClick={()=> {
                        router.push('/home', undefined, { shallow: true })
                        dispatch(toggleModal(false));
                    }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <path
                                d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z"
                                fill="#f2f2f2"
                            ></path>
                        </svg>
                    </span>
                </>}
            </header>
            <div className="quote-body">
                <div className="quote-body-heading">
                    <span className="quote-body-heading-topic">{singleQuote?.category?.name} quote </span>from{' '}
                    <span className="quote-body-heading-author">{singleQuote?.author?.name}</span>
                    <span className="quote-body-heading-start">
                        {' '}
                        {singleQuote?.text}{' '}
                    </span>
                </div>
                <div className="quote-body-content">
                    <div className="quote-body-author">
                        <img
                            src={randomAuthor.src}
                            alt="Author Avatar"
                            className="quote-body-author-avatar"
                        />

                        <div className="quote-body-author-profile">
                            <span className="quote-body-author-name">{singleQuote?.author?.name}</span>
                            {singleQuote?.tags?.length > 0 && <div className="quote-body-author-tags">
                                Main tags:&nbsp;
                                {singleQuote?.tags?.map((tag) =>
                                    <>
                                        <span className="quote-body-author-tag">{tag?.tag_text}</span>
                                        ,&nbsp;
                                    </>
                                )}
                                {/* <span className="quote-body-author-tag current">{singleQuote?.tags[1]}</span> */}
                                { }
                            </div>}
                        </div>
                    </div>
                    <div className="quote-body-options">
                        <div className="quote-body-options-item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="22"
                                viewBox="0 0 16 22"
                                fill="none"
                            >
                                <path
                                    d="M12 4L10.58 5.42L8.99 3.83V15H7.01V3.83L5.42 5.42L4 4L8 0L12 4ZM16 9V20C16 21.1 15.1 22 14 22H2C0.89 22 0 21.1 0 20V9C0 7.89 0.89 7 2 7H5V9H2V20H14V9H11V7H14C15.1 7 16 7.89 16 9Z"
                                    fill="#BDBDBD"
                                />
                            </svg>
                            <span className="quote-body-options-item-name">Share</span>
                        </div>
                        <div className="quote-body-options-item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="21"
                                viewBox="0 0 16 15"
                                fill="none"
                            >
                                <path
                                    d="M8 14.9333L6.84 13.8591C2.72 10.0586 0 7.55212 0 4.47593C0 1.96941 1.936 0 4.4 0C5.792 0 7.128 0.659183 8 1.70085C8.872 0.659183 10.208 0 11.6 0C14.064 0 16 1.96941 16 4.47593C16 7.55212 13.28 10.0586 9.16 13.8672L8 14.9333Z"
                                    fill="#BDBDBD"
                                ></path>
                            </svg>
                            <span className="quote-body-options-item-name">Like</span>
                        </div>
                        <div className="quote-body-options-item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="27"
                                height="21"
                                viewBox="0 0 27 21"
                                fill="none"
                            >
                                <path
                                    d="M16.4063 15.6665H18.3438V12.7603H21.2501V10.8228H18.3438V7.9165H16.4063V10.8228H13.5001V12.7603H16.4063V15.6665ZM2.55322 20.8332C2.03656 20.8332 1.58447 20.634 1.19697 20.2358C0.809472 19.8375 0.615723 19.3908 0.615723 18.8957V2.104C0.615723 1.60887 0.809472 1.16216 1.19697 0.7639C1.58447 0.365636 2.03656 0.166504 2.55322 0.166504H11.5949L13.5324 2.104H24.5116C25.0067 2.104 25.4534 2.30314 25.8517 2.7014C26.2499 3.09966 26.4491 3.54637 26.4491 4.0415V18.8957C26.4491 19.3908 26.2499 19.8375 25.8517 20.2358C25.4534 20.634 25.0067 20.8332 24.5116 20.8332H2.55322ZM2.55322 2.104V18.8957H24.5116V4.0415H12.7251L10.7876 2.104H2.55322ZM2.55322 2.104V4.0415V18.8957V2.104Z"
                                    fill="#BDBDBD"
                                />
                            </svg>
                            <span className="quote-body-options-item-name">Save</span>
                        </div>
                    </div>
                </div>
                <div className="quote-body-text">
                    {singleQuote?.text}
                </div>

                <section className="quote-body-other-quotes">
                    <h3 className="quote-body-other-quotes-title">
                        Other quotes for {singleQuote?.author?.name}
                    </h3>
                    <div className="quote-body-other-quotes-cards">
                     {authorQuotes?.results?.map(quote => <QuoteCard key={quote.id} quote={quote} />)}

                    </div>
                </section>

                <section className="quote-body-similar-quotes">
                    <h3 className="quote-body-similar-quotes-title">
                        Other similar quotes for&nbsp;
                        <span className="quote-body-author-tag current">{singleQuote?.tags[0]?.tag_text}</span>
                    </h3>
                    <div className="quote-body-similar-quotes-cards">
                        {tagQuotes?.results?.map(quote => <QuoteCard key={quote.id} quote={quote} />)}
                    </div>
                </section>
            </div>
        </div>
    )
}