import { createSlice } from "@reduxjs/toolkit"

var themeSlice = createSlice({
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

export var { TOGGLE_THEME } = themeSlice.actions

export default themeSlice.reducer
