import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import loadDataEstudentSlice from './slices/loadDataEstudentSlice'

export const store = configureStore({
  reducer: {
      counter:authSlice,
      dataEstudnetExcel:loadDataEstudentSlice
  },
})