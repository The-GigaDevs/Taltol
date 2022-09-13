import { createAsyncThunk , createSlice} from "@reduxjs/toolkit";    
import { getAuthors} from "../services/auth.service";
//initialize authors state
const initialState = {
    authors: [],
};
//create async thunk to fetch authors
export const fetchAuthors = createAsyncThunk(
    "authors/fetchAuthors",
    async () => {
        const result = await getAuthors(1, 10);
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
//create authors slice
export const authorsSlice = createSlice({
    name: "authors",
    initialState,
    reducers: {
        addAuthors: (state, action) => {
            state.authors = state.authors;
        }
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
        }
    },
});


export default authorsSlice.reducer;
