import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import authService from '../services/auth.service'

const { allUsers, getDropdownOptions, saveDropdownOptions } = authService;

const initialState ={
    allUsers: [],
    dropdown: []
}

export const getAllUsers  = createAsyncThunk(
    'admin/getAllUsers',
    () => {
        const result = toast.promise(
            allUsers(),
            {
                success:'Users fetched!',
                pending: 'Getting all users...',
                error: 'Unable to get users.'
            }
        )
        return result;
    }
)

export const fetchDropdownOptions = createAsyncThunk(
    'admin/dropdown',
    async () => {
        const result = await getDropdownOptions();
        return result;
    }
)

export const editDropdownOptions = createAsyncThunk(
    'admin/editDropdown',
    (data) => {
        const result = toast.promise(
            saveDropdownOptions(data),
            {
                success: 'Dynamic dropdown options changed!',
                pending: 'Changing dropdown options...',
                error: 'Error!!! Cannot change dropdown opions.'
            }
            )
        return result;
    }
)
export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
       
    },
    extraReducers : {
      [getAllUsers.fulfilled]: (state, action) =>{
            state.allUsers = action.payload;
      },
      [getAllUsers.rejected]: (state, action) =>{
        state.allUsers = [];
      },
      [fetchDropdownOptions.fulfilled]: (state, action) => {
        state.dropdown = action.payload;
      },
      [fetchDropdownOptions.rejected]: (state, action) => {
        state.dropdown = [];
      },
      [editDropdownOptions.fulfilled]: (state, action) => {
        state.dropdown = action.payload;
      },
      [editDropdownOptions.rejected]: (state, action) => {
        state.dropdown = null;
      },
    }
})


export default adminSlice.reducer;