import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from '../services/auth.service'
const { login } = authService;

const initialState = {
    isAuthenticated: false,
    user: null,
    isSocialLogin: false,
}

export const loginUser = createAsyncThunk(
    'auth/login',
    async (email, password) => {
        const result = await login(email, password)
        return result;
    }
)
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        }
    },
})

export const { addUser } = authSlice.actions

export default authSlice.reducer;