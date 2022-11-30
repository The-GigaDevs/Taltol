//import asyncthunk and createSlice from redux toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import authService from "../services/auth.service";
const { getQuotes, getQuote, getQuotesAgainstTag, getQuotesOfSingleCategory, getAuthorQuotesWithPage, addQuote, deleteQuote } = authService;

//initialize quotes state
const initialState = {
    quotes: [],
    singleQuote: null,
    isModal: false,
    quotesAgainstTag: [],
    route: ''
};
export const fetchSingleQuote = createAsyncThunk(
    "quotes/singleQuote",
    async (slug) => {
        const result = toast.promise(
            getQuote(slug), 
            {
                success:'Single quote fetched!',
                error:'Unable to load this quote.',
                pending:'Loading single quote...'
            }
        );
        return result;
    }
)

export const fetchQuotesAgainstTag = createAsyncThunk(
    "quotes/fetchQuotesAgainstTag",
    async (tagId) => {
        const result = toast.promise( 
            getQuotesAgainstTag(tagId),
            {
                success:'Quotes fetched!',
                error:'Unable to load quotes.',
                pending:'Loading quotes...'
            }
        );
       
        return result;
    }
)
//create async thunk to fetch quotes
export const fetchQuotes = createAsyncThunk(
    "quotes/fetchQuotes",
    async (details) => {
        const result = toast.promise(
            getQuotes(details.page, details.pageSize) ,
            {
            pending: 'Loading quotes...',
            success: 'Quotes Fetched!',
            error: 'Unable to load quotes.'
            }
        );
        return result;
    }
);

export const createQuote = createAsyncThunk(
    'quotes/createQuote',
    async (body) => {
        const result = toast.promise(
            addQuote(body), 
            {
                pending: 'Creating your quote...',
                success: 'Quote Created!',
                error: 'Unable to create quote.'
            }
        )
        return result;
    }
)
//create async thunk to add more quotes in the store
export const addMoreQuotes = createAsyncThunk(
    "quotes/addMoreQuotes",
    async ({page, pageSize}) => {
        const result = toast.promise(
             getQuotes(page, pageSize),
             {
                // success:''
                pending:'Loading more quotes...',
                error: 'Unable to load more quotes.'
             }
        );
        return result;
    }
);



export const fetchQuotesOfCategory = createAsyncThunk(
    "quotes/fetchQuotesOfCategory", 
    async ({id, page}) => {
        const result = toast.promise(
              getQuotesOfSingleCategory(id, page),
             {
                success:'Quotes fetched!',
                error:'Unable to load quotes.',
                pending:'Loading quotes...'
             }
        );
        return result
    }
)

export const fetchQuotesOfAuthorWithPage = createAsyncThunk(
    "quotes/fetchQuotesOfAuthorWithPage", 
    async ({id, page}) => {
        const result = await getAuthorQuotesWithPage(id, page);
        //console.log(result, 'author');
        return result
    }
)

export const likeAQuoteInQuotes = createAsyncThunk(
    "likes/likeAQuoteInQuotes",
    async (id) => {
        //change the state of the quote to liked
        return id;
        
    }
);

export const unlikeAQuoteInQuotes = createAsyncThunk(
    "likes/unlikeAQuoteInQuotes",
    async (id) => {
        return id;
    }

);

export const deleteQuoteFromDB = createAsyncThunk(
    'quote/deleteQuote',
    (slug) => {
        const result = toast.promise(
            deleteQuote(slug),
            {
                success: 'Quote deleted!',
                pending: 'Deleting quote...',
                error: 'Unable to delet quote.'
            }
        )
        return slug;
    }
)
//create quotes slice
export const quotesSlice = createSlice({
    name: "quotes",
    initialState,
    reducers: {
        addQuotes: (state, action) => {
            state.quotes = action.payload;
            // //console.log("State of the store",state.quotes);
        },
        singleQuote: (state, action) => {
            state.singleQuote = action.payload;
        },
        toggleModal: (state, action) => {
            state.isModal = action.payload;
        },
        changeRoute: (state, action) => {
            state.route = action.payload;
        }

        
    },
    extraReducers: {
        [fetchQuotes.fulfilled]: (state, action) => {
            state.quotes = action.payload;
        },
        [addMoreQuotes.fulfilled]: (state, action) => {
            state.quotes.results.push(...action.payload.results);
        },
        [fetchSingleQuote.fulfilled]: (state, action) => {
            state.singleQuote = action.payload;
        },
        [fetchQuotesAgainstTag.fulfilled] : (state, action) => {
            state.quotesAgainstTag = action.payload;
        },
        [fetchQuotesAgainstTag.rejected] : (state, action) => {
            state.quotesAgainstTag = [];
        },
        [fetchQuotesAgainstTag.fulfilled] : (state, action) => {
            state.quotes = action.payload;
        },
        [fetchQuotesOfCategory.fulfilled] : (state, action) => {
            state.quotes = action.payload;
        },
        [fetchQuotesOfCategory.rejected] : (state, action) => {
            state.quotes = null;
        },
        [fetchQuotesOfAuthorWithPage.fulfilled] : (state, action) => {
            state.quotes = action.payload;
        },
        [fetchQuotesOfAuthorWithPage.rejected] : (state, action) => {
            state.quotes = null;
        },
        [deleteQuoteFromDB.fulfilled] : (state, action) => {
            state.quotes.results.filter((quote) =>  quote.slug !== action.payload.slug)
        },
        [likeAQuoteInQuotes.fulfilled] : (state, action) => {
            if(state.quotes?.results?.length > 0){
            let quote = state.quotes?.results?.find((quote) => quote.id === action.payload);
            quote.quote_liked = true;
            quote.total_likes += 1;
            singleQuote.quote_liked = true;
            state.quotes.results = [...state.quotes.results, quote];
            }
        },
        [unlikeAQuoteInQuotes.fulfilled] : (state, action) => {
            if(state.quotes?.results?.length > 0){
            let quote = state.quotes?.results?.find((quote) => quote.id === action.payload);
            quote.quote_liked = false;
            quote.total_likes -= 1;
            singleQuote.quote_liked = false;
            state.quotes.results = [...state.quotes.results, quote];
            }
        }
    },
});

export const { addQuotes, singleQuote, toggleModal, changeRoute } = quotesSlice.actions;
export default quotesSlice.reducer;
