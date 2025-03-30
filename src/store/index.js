import { createSlice, configureStore } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDark: false
  },
  reducers: {
    TOGGLE_THEME: (state) => {
      state.isDark = !state.isDark
    }
  }
})

export const { TOGGLE_THEME } = themeSlice.actions

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer
  }
})

export default store
