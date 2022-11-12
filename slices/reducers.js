import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth.slice'
import quotesReducer from './quotes.slice'
import authorsReducer from './authors.slice'
import categoriesReducer from './categories.slice'
import tagsReducer from './tags.slice'
import likesReducer from './likes.slice'
import collectionsReducer from './collection.slice'
import adminReducer from './admin.slice'
export const allReducers = combineReducers({
    auth: authReducer,
    authors: authorsReducer,
    quotes: quotesReducer,
    categories : categoriesReducer,
    tags: tagsReducer,
    collections: collectionsReducer,
    likes: likesReducer,
    admin: adminReducer
})
