import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
const { getCategories , getCategory} = authService;
//initialize categories state
const initialState = {
    categories: [],
}

//create async thunk to fetch categories
export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        const result = await getCategories(1, 30);
        return result;
    }
)

export const searchCategory = createAsyncThunk(
    "categories/searchCategory",
    async (category) => {
        const result = await getCategory(category);
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
        [searchCategory.fulfilled]: (state, action) => {
            state.categories = action.payload;
        }
    },

})

export default categoriesSlice.reducer

