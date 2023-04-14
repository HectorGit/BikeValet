//This is a Redux store for the project 
//Initial State. (Redux toolkit in particular)

import { configureStore } from '@reduxjs/toolkit'
import customerReducer from './customerReducer'

export const store = configureStore({
    initialState : {
    },
    reducer: {
      customer: customerReducer
    }
})