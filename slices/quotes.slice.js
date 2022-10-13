//import asyncthunk and createSlice from redux toolkit
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
const { getQuotes, getQuote, getQuotesAgainstTag, getQuotesOfSingleCategory, getAuthorQuotesWithPage } = authService;

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
    async (id) => {
        const result = await getQuote(id);
        return result;
    }
)

export const fetchQuotesAgainstTag = createAsyncThunk(
    "quotes/fetchQuotesAgainstTag",
    async (tagId) => {
        const result = await getQuotesAgainstTag(tagId);
        console.log(result, 'tags');
        return result;
    }
)
//create async thunk to fetch quotes
export const fetchQuotes = createAsyncThunk(
    "quotes/fetchQuotes",
    async () => {
        const result = await getQuotes(1, 10);
        return result;
    }
);
//create async thunk to add more quotes in the store
export const addMoreQuotes = createAsyncThunk(
    "quotes/addMoreQuotes",
    async ({page, pageSize}) => {
        const result = await getQuotes(page, pageSize);
        return result;
    }
);

export const fetchQuotesOfCategory = createAsyncThunk(
    "quotes/fetchQuotesOfCategory", 
    async ({id, page}) => {
        const result = await getQuotesOfSingleCategory(id, page);
        console.log(result, 'category');
        return result
    }
)

export const fetchQuotesOfAuthorWithPage = createAsyncThunk(
    "quotes/fetchQuotesOfAuthorWithPage", 
    async ({id, page}) => {
        const result = await getAuthorQuotesWithPage(id, page);
        console.log(result, 'author');
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

//create quotes slice
export const quotesSlice = createSlice({
    name: "quotes",
    initialState,
    reducers: {
        addQuotes: (state, action) => {
            state.quotes = action.payload;
            // console.log("State of the store",state.quotes);
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
        [likeAQuoteInQuotes.fulfilled] : (state, action) => {
            const quote = state.quotes.results.find((quote) => quote.id === action.payload);
            quote.quote_liked = true;
            quote.total_likes += 1;
        },
        [unlikeAQuoteInQuotes.fulfilled] : (state, action) => {
            const quote = state.quotes.results.find((quote) => quote.id === action.payload);
            quote.quote_liked = false;
            quote.total_likes -= 1;
        }
    },
});

export const { addQuotes, singleQuote, toggleModal, changeRoute } = quotesSlice.actions;
export default quotesSlice.reducer;
