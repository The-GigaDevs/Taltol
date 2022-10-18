import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
const { getTags, getTagQuotes, getTag } = authService;
//initialize tags state
const initialState = {
    tags: [],
};
//create async thunk to fetch tags
export const fetchTags = createAsyncThunk(
    "tags/fetchTags",
    async (page) => {
        const result = await getTags(page ? page.page : 1, 30);
        return result;
    }
);

export const searchTag = createAsyncThunk(
    "tags/searchTag",
    async (tag) => {
        const result = await getTag(tag);
        return result;
    }
);
//create tags slice
export const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        addTags: (state, action) => {
            state.tags = action.payload
        }
    },
    extraReducers: {
        [fetchTags.fulfilled]: (state, action) => {
            state.tags = action.payload;
        },
        [searchTag.fulfilled]: (state, action) => {
            state.tags = action.payload;
            //console.log("State of the quotes" , current(state));
        }
    },
});
export default tagsSlice.reducer;
