import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from '../services/auth.service'
const { login, register } = authService;
import {toast}  from 'react-toastify';

const initialState = {
    isAuthenticated: false,
    user: null,
    isSocialLogin: false,
    newUser: {}
}

export const loginUser = createAsyncThunk(
    'auth/login',
    ({email, password}) => {
        const result = 
        toast.promise(
            login(email, password),
            {
                success: 'Login Successful!',
                error: 'Error loggin in user. Check whether the information you provided is correct or not.',
                pending: 'Loggin in user, Please wait!'
            }
        )
        //console.log(result);
        if(result?.accessToken && result.status === 200) {
            localStorage.setItem('token', `Bearer ${result?.accessToken}`)
        }
        return result;
    }
)

export const registerUser = createAsyncThunk(
    'auth/register',
    (user) => {
        const result =toast.promise(
            register(user),
            {
                success: 'User registered!',
                error: 'Error registering user. Check whether the information you provided is correct or not.',
                pending: 'Registering user, Please wait!'
            }
        )   
        return result;
    }
)
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
        authenticateUser: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload
        },
    
    },
    extraReducers : {
        [registerUser.fulfilled] : (state, action) => {
            state.newUser = action.payload;
        },
        [loginUser.fulfilled] : (state, action) => {
            state.user = action?.payload?.accessToken;
            state.isAuthenticated = true;
        }
    }
})

export const { addUser, authenticateUser } = authSlice.actions

export default authSlice.reducer;