import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import likesService from "../services/likes.service";
const { getLikedQuotes, likeQuote, unlikeQuote } = likesService;

const initialState = {
    likedQuotes: [],
}

export const fetchLikedQuotes = createAsyncThunk(
    "likes/fetchLikedQuotes",
    async () => {
        const result = await getLikedQuotes();
        return result;
    }
);

export const likeAQuote = createAsyncThunk(
    "likes/likeAQuote",
    async (id) => {
        const result = await likeQuote(id);
        console.log("result of liking a quote is: ", result);
        return result;
    }
);

export const unlikeAQuote = createAsyncThunk(
    "likes/unlikeAQuote",
    async (id) => {

        const result = await unlikeQuote(id);
        return result;
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
            state.likedQuotes = state.likedQuotes.filter(quote => quote.id !== action.payload.id);
        }
    }
});

export default likesSlice.reducer;
