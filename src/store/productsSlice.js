import { createSlice } from "@reduxjs/toolkit"

var productsSlice = createSlice({
  name: 'products',
  initialState: [{
    id: 1,
    name: "Телефон",
    description: "Смартфон",
    price: 10000,
    available: true
  }],
  reducers: {
    ADD_PRODUCT: (state, action) => {
      state.push(action.payload)
    },
    REMOVE_PRODUCT: (state, action) => {
      return state.filter(product => product.id !== action.payload)
    },
    UPDATE_PRODUCT: (state, action) => {
      return state.map(product => product.id === action.payload.id ? action.payload : product)
    }
  }
})

export var { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } = productsSlice.actions

export default productsSlice.reducer
