import { createAsyncThunk , createSlice, current} from "@reduxjs/toolkit";    
import { toast } from "react-toastify";
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
    async (page) => {
        let result = [];
        if (page?.isAdmin) {
            result = toast.promise(
                 getAuthors(page ? page.page : 1, page ? page.pageSize :  30),
                 {
                    success: 'Authors Fetched!',
                    error: 'Unable to load all authors.',
                    pending:'Loading all authors...'
                 }
            );
        } else {
            result = await getAuthors(page ? page.page : 1, page ? page.pageSize :  30);
        }
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
        const result = toast.promise(
            getSingleAuthor(authorId),
            {
                success:'Single author fetched!',
                pending:'Loading author...',
                error: 'Unable to load this author'
            }
        );
        return result;
    }
)

export const getAllQuotesOfAuthor = createAsyncThunk(
    "authors/getAllQuotesOfAuthor",
    async (authorId) => {
        const result = await getAuthorQuotes(authorId);
        //console.log(result, 'getAllQuotesOfAuthor');
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
        },
        [fetchAuthors.rejected]: (state, action) => {
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
            //console.log("State of the quotes" , current(state));
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
