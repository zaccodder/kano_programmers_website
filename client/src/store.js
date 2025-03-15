import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './api/blogsSlice.js'

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
})

export default store
