import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
const { getCategories , getCategory, getSingleCategory , getQuotesOfSingleCategory} = authService;
//initialize categories state
const initialState = {
    categories: [],
    singleCategory : null,
}

export const fetchSingleCategory = createAsyncThunk(
    "categories/fetchSingleCategory", 
    async (categoryId) => {
        const result = await getSingleCategory(categoryId);
        return result
    }
)

//create async thunk to fetch categories
export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async ({page, pageSize}) => {
        //call below function only if the state is empty
        const result = await getCategories(page, pageSize);
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
        },
        [fetchSingleCategory.fulfilled] : (state, action) => {
            state.singleCategory = action.payload;
        },
        [fetchSingleCategory.rejected] : (state, action) => {
            state.singleCategory = null;
        },
        
    },

})

export default categoriesSlice.reducer

