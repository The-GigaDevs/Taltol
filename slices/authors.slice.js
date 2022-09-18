import { createAsyncThunk , createSlice, current} from "@reduxjs/toolkit";    
import authService from "../services/auth.service";
const { getAuthors, getAuthorQuotes, getAuthor, getSingleAuthor } = authService;
//initialize authors state
const initialState = {
    authors: [],
    authorQuotes: [],
    singleAuthor: null,
};
//create async thunk to fetch authors
export const fetchAuthors = createAsyncThunk(
    "authors/fetchAuthors",
    async () => {
        const result = await getAuthors(1, 30);
        return result;
    }
);
//create async thunk to add more authors in the store
export const addMoreAuthors = createAsyncThunk(
    "authors/addMoreAuthors",
    async ({page, pageSize}) => {

        const result = await getAuthors(page, pageSize);
        return result;
    }
);
export const authorSearch = createAsyncThunk(
    "authors/authorSearch",
    async (name) => {
        const result = await getAuthor(name);
        return result;
    }
);

export const fetchSingleAuthor = createAsyncThunk(
    "authors/fetchSingleAuthor",
    async (authorId) => {
        const result = await getSingleAuthor(authorId);
        console.log(result);
        return result;
    }
)

export const getAllQuotesOfAuthor = createAsyncThunk(
    "authors/getAllQuotesOfAuthor",
    async (authorId) => {
        const result = await getAuthorQuotes(authorId);
        console.log(result, 'getAllQuotesOfAuthor');
        return result;
    }
)
//create authors slice
export const authorsSlice = createSlice({
    name: "authors",
    initialState,
    reducers: {
        addAuthors: (state, action) => {
            state.authors = action.payload;
        },
    },
    extraReducers: {
        [fetchAuthors.fulfilled]: (state, action) => {
            state.authors = action.payload;
            console.log("State of the quotes" , current(state));
        },
        [fetchAuthors.rejected]: (state, action) => {
            console.log("State of the quotes" , current(state));
            console.log("Error in fetching authors",action.error);
            state.authors = [];
        },
        [fetchAuthors.pending]: (state, action) => {
            state.authors = [];
        },
        [getAllQuotesOfAuthor.fulfilled]: (state, action) => {
            state.authorQuotes = action.payload
        },
        [getAllQuotesOfAuthor.rejected]: (state, action) => {
            state.authorQuotes = []
        },
        [authorSearch.fulfilled]: (state, action) => {
            state.authors = action.payload;
            console.log("State of the quotes" , current(state));
        },
        [fetchSingleAuthor.fulfilled]: (state, action) => {
            state.singleAuthor = action.payload
        },
        [fetchSingleAuthor.rejected]: (state, action) => {
            state.singleAuthor = null
        }
    },
});


export default authorsSlice.reducer;