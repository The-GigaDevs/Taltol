//import asyncthunk and createSlice from redux toolkit
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
const { getQuotes, getQuote } = authService;

//initialize quotes state
const initialState = {
    quotes: [],
    singleQuote: null,
    isModal: false,
};
export const fetchSingleQuote = createAsyncThunk(
    "quote/singleQuote",
    async (id) => {
        const result = await getQuote(id);
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
        }
        // addMoreQuotes: (state, action) => {
        //     state.quotes = state.quotes.concat(action.payload);
        // }
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
        }
    },
});

export const { addQuotes, singleQuote, toggleModal } = quotesSlice.actions;
export default quotesSlice.reducer;
