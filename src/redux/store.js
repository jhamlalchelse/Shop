import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/productReducer'

export const store = configureStore({
  reducer: {
    shopProducts: counterReducer,
  },
})