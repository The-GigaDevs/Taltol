import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
        const result = toast.promise(
            getSingleCategory(categoryId), 
            {
                success: 'Category fetched!',
                error:'Unable to load this category',
                pending:'Loading category...'
            }
        );
        return result
    }
)

//create async thunk to fetch categories
export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async ({page, pageSize, isAdmin}) => {
        //call below function only if the state is empty
        let result = [];
        if(isAdmin) {
             result = toast.promise(
                getCategories(page, pageSize), 
                {
                    success: 'Categories fetched!',
                    pending:'Loading categories...',
                    error: 'Unable to load categories.'
                }
            );
        } else {
            result = await getCategories(page, pageSize);
        }
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

