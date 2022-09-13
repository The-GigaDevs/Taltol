import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
const { getCategories } = authService;
//initialize categories state
const initialState = {
    categories: [],
}

//create async thunk to fetch categories
export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        const result = await getCategories(1, 100);
        return result;
    }
)

//create categories slice
export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = action.payload;
        },
    },
})

export default categoriesSlice.reducer

