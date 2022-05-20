import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import loadDataSlice from './slices/loadDataSlice'

export const store = configureStore({
  reducer: {
      counter:authSlice,
      dataExcel:loadDataSlice
  },
})