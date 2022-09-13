import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth.slice'
import quotesReducer from './quotes.slice'
import authorsReducer from './authors.slice'
import categoriesReducer from './categories.slice'
export const allReducers = combineReducers({
    auth: authReducer,
    authors: authorsReducer,
    quotes: quotesReducer,
    categories : categoriesReducer
})
