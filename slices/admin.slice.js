import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import authService from '../services/auth.service'

const { allUsers } = authService;

const initialState ={
    allUsers: []
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
      }
    }
})


export default adminSlice.reducer;