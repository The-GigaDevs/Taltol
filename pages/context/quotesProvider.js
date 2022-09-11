import React, {useState} from "react";
import QuotesContext from "./quotes.context";

/**
 * It takes in a child component and returns a new component that wraps the child component in a
 * context provider
 * @returns The QuotesProvider is returning a QuotesContext.Provider component.
 */
const QuotesProvider = ({children}) => {
    const [quotes, setQuotes] = useState([]);

    return (
        <QuotesContext.Provider value={{quotes, setQuotes}}>
            {children}
        </QuotesContext.Provider>
    );
}

export default QuotesProvider;
