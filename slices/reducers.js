import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth.slice'

export const allReducers = combineReducers({
    auth: authReducer
})
