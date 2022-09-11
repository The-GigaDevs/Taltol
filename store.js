import { configureStore } from '@reduxjs/toolkit'
import { allReducers } from './slices/reducers'

function makeStore() {
  return configureStore({
    reducer: allReducers,
    devTools: process.env.NODE_ENV !== 'production'
  })
}

const store = makeStore();

export default store;