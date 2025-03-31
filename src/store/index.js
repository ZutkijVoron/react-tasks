import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productsSlice'
import themeSlice from './themeSlice'


export var store = configureStore({
  reducer: {
    theme: themeSlice,
    products: productsSlice
  }
})

export default store
