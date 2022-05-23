import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import loadDataEstudentSlice from './slices/loadDataEstudentSlice'
import loadDataMentorSlice from './slices/loadDataMentorSlice'

export const store = configureStore({
  reducer: {
      counter:authSlice,
      dataEstudentExcel:loadDataEstudentSlice,
      dataMentorExcel:loadDataMentorSlice
  },
})