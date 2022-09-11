import { createContext } from "react";

const QuotesContext = createContext(
    {
        quotes: [],
        topics: [],
        setQuotes: () => {},
        setTopics: () => {}
    }
);

export default QuotesContext;