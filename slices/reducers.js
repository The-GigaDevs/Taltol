import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth.slice'
import quotesReducer from './quotes.slice'
export const allReducers = combineReducers({
    auth: authReducer,
    quotes: quotesReducer
})
