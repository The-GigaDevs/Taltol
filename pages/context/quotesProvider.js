import React, {useState} from "react";
import QuotesContext from "./quotes.context";

const QuotesProvider = ({children}) => {
    const [quotes, setQuotes] = useState([]);

    return (
        <QuotesContext.Provider value={{quotes, setQuotes}}>
            {children}
        </QuotesContext.Provider>
    );
}

export default QuotesProvider;
