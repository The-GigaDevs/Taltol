import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import likesService from "../services/likes.service";
const { getLikedQuotes, likeQuote, unlikeQuote } = likesService;

const initialState = {
    likedQuotes: []
}

export const fetchLikedQuotes = createAsyncThunk(
    "likes/fetchLikedQuotes",
    async () => {
        const result = await getLikedQuotes();
        result.results.map(quote => quote.quote_liked = true);
        return result;
    }
);

export const likeAQuote = createAsyncThunk(
    "likes/likeAQuote",
    async (id) => {
        //change the state of the quote to liked
        const result = await likeQuote(id);
        //console.log("result of liking a quote is: ", result);
        return result;
    }
);

export const unlikeAQuote = createAsyncThunk(
    "likes/unlikeAQuote",
    async (id) => {
        return id;
    }

);


const likesSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchLikedQuotes.fulfilled]: (state, action) => {
            state.likedQuotes = action.payload;
        },
        [unlikeAQuote.fulfilled]: (state, action) => {
            state.likedQuotes.results = state.likedQuotes?.results?.filter(quote => quote.id !== action.payload);
        },
        
       
    }
});

export default likesSlice.reducer;
