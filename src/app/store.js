import { configureStore } from '@reduxjs/toolkit'
import booksReducer from "../features/books/BooksSlice"
export const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
})