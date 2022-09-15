import { createAsyncThunk , createSlice, current} from "@reduxjs/toolkit";    
import authService from "../services/auth.service";
const { getAuthors, getAuthorQuotes } = authService;
//initialize authors state
const initialState = {
    authors: [],
    authorQuotes: [],
};
//create async thunk to fetch authors
export const fetchAuthors = createAsyncThunk(
    "authors/fetchAuthors",
    async () => {
        const result = await getAuthors(1, 100);
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
            state.authorQuotes = action.payload
        }
    },
});


export default authorsSlice.reducer;
