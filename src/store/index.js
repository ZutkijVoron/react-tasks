import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productsSlice'
import themeSlice from './themeSlice'
import tasksSlice from './tasksSlice'


export var store = configureStore({
  reducer: {
    theme: themeSlice,
    products: productsSlice,
    tasks: tasksSlice
  }
})

export default store
