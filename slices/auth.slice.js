import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from '../services/auth.service'
const { login, register, me, socialLogin } = authService;
import {toast}  from 'react-toastify';

const initialState = {
    isAuthenticated: false,
    user: null,
    isSocialLogin: false,
    newUser: {},
    accessToken: null,
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
                pending: 'Logging in user, Please wait!'
            }
        )
        result.then((data) => {
            if(data.access) {
                localStorage.setItem('token', data.access)
            }
        })
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

export const isUserLoggedIn = createAsyncThunk(
    'auth/me',
    () => {
        try {
            const result = me();
            return result.then((data) => data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
)

export const socialLoginAction = createAsyncThunk(
    'auth/social-login',
    (user) => {
        const result = toast.promise(
            socialLogin(user),
            {
                success: 'Login Successful!',
                error: 'Error loggin in user. Check whether the information you provided is correct or not.',
                pending: 'Loggin in user, Please wait!'
            }
        )
        result.then((data) => {
            if(data.access) {
                localStorage.setItem('token', data.access)
            }
        })
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
        signOut: (state, action) => {
            localStorage.removeItem('token');
            state.user = null;
            state.isAuthenticated = false;
            state.isSocialLogin = false;
        }
    },
    extraReducers : {
        [registerUser.fulfilled] : (state, action) => {
            state.newUser = action.payload;
        },
        [loginUser.fulfilled] : (state, action) => {
            state.access = action?.payload?.access;
            state.isAuthenticated = true;
        },
        [isUserLoggedIn.fulfilled] : (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        [isUserLoggedIn.rejected] : (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        [socialLoginAction.fulfilled] : (state, action) => {
            state.access = action.payload;
            state.isAuthenticated = true;
            state.isSocialLogin = true;

        },
        [socialLoginAction.rejected] : (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isSocialLogin = false;
        },
    }
})

export const { addUser, signOut } = authSlice.actions

export default authSlice.reducer;