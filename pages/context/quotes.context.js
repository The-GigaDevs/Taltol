import { createContext } from "react";

const QuotesContext = createContext(
    {
        quotes: [],
        setQuotes: () => {}
    }
);

export default QuotesContext;